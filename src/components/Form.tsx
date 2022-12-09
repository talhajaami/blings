import { Formik, Form } from 'formik';
import { Button, Box } from '@chakra-ui/react';
import { ethers } from 'ethers';
import LazyMintingAddress from '../contract-abi/LazyMinting-address.json';
import toast, { Toaster } from 'react-hot-toast';
import { FormGroup, Input, InputGroup } from 'reactstrap';
import { useEffect, useState } from 'react';
import { create } from 'ipfs-http-client'
import { Buffer } from 'buffer'
import axios from 'axios'

const ModuleFormik = () => {
  const initialValues = { amount: 1 };
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [image, setImage] = useState('')
  const [fileType, setFileType] = useState()

  useEffect(() => {
    walletConnect()
  }, []);

  const walletConnect = async () => {
    await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
  }

  const projectId = '2IagCV6gVLiAigox0s2YpCbqNIu';   // <---------- your Infura Project ID
  const projectSecret = '932b70d6f0bca4b641e1df2a76c37d3f';  // <---------- your Infura Secret
  const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

  const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
      authorization: auth
    }
  })

  const uploadToIPFS = async (event: any) => {
    event.preventDefault()
    const file = event.target.files[0]
    setFileType(file.type)
    if (typeof file !== 'undefined') {
      try {
        const result = await client.add(file)
        setImage(`https://blingnft.infura-ipfs.io/ipfs/${result.path}`)
        console.log(`https://blingnft.infura-ipfs.io/ipfs/${result.path}`)
      } catch (error) {
        console.log('ipfs image upload error: ', error)
      }
    }
  }


  const lazyMint = async () => {
    if (!window.ethereum) {
      toast.error('Install Metamask Extension')
    }
    await window.ethereum.send('eth_requestAccounts')
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const { chainId } = await provider.getNetwork()
    if (chainId != 5) {
      toast.error('Change to Goerli Network');
    }
    const address = await signer.getAddress()
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let token = params.get('token');
    console.log(token)

    if (!image || !title || !desc || !token) return
    try {
      let result = await client.add(
        JSON.stringify({ image, title, desc, token })
      )
      const signingDomain = async () => {
        const domain = {
          name: 'Bling-NFT',
          version: '1',
          verifyingContract: LazyMintingAddress.address,
          chainId: 5, // put chain id here, on which chain you are going to deploy
        }
        return domain
      }
      const domain = await signingDomain()

      const types = {
        NFTVoucher: [
          { name: 'signerAddress', type: 'address' },
          { name: 'title', type: 'string' },
          { name: 'description', type: 'string' },
          { name: 'uri', type: 'string' },
          { name: 'userId', type: 'string' },
        ],
      }

      let uri = `https://blingnft.infura-ipfs.io/ipfs/${result.path}`

      const voucher = {
        signerAddress: address,
        title: title,
        description: desc,
        uri: uri,
        userId: token,
      }

      const signature = await signer._signTypedData(domain, types, voucher).catch(() => {
        toast.error('Transaction Fail');
      })

      const response = await axios.post(`https://import.blingnft.art/public/api/v3/mint?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c&id=1&mime=${fileType}&tokenId=${token}&tokenAddress=${address}&media=${image}&title=${title}&signature=${signature}&details=${desc}&metadata_url=${uri}`).then(() => {
        toast.success('NFT Minted Successfully');
      }).catch(() => {
        toast.error('Mint Fail');
      })
      console.log(response)
    } catch (error) {
      console.log('ipfs uri upload error: ', error)
    }

  };

  return (
    <>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={() => {
            lazyMint();
          }}
        >
          <Form className="form">
            <FormGroup className='py-5'>
              <InputGroup>
                <Input
                  className="custom_form_feild"
                  name="file"
                  type='file'
                  bsSize="lg"
                  placeholder="Enter Title"
                  onChange={uploadToIPFS}
                />
              </InputGroup>
              <br />
              <InputGroup>
                <Input
                  className="custom_form_feild"
                  name="title"
                  bsSize="lg"
                  placeholder="Enter Title"
                  onChange={(e: any) => {
                    setTitle(e.target.value);
                  }}
                />
              </InputGroup>
              <InputGroup>
                <Input
                  className="custom_form_feild my-3"
                  name="desc"
                  bsSize="lg"
                  placeholder="Enter Description"
                  onChange={(e: any) => {
                    setDesc(e.target.value);
                  }}
                />
              </InputGroup>
              <Box mt="0.5rem">
                <Button
                  className="btn-mint"
                  width="100%"
                  p="1.62rem"
                  type="submit"
                  borderRadius="1.25rem"
                  _hover={{ bg: 'rgb(255,165,0)' }}
                >
                  MINT NOW
                </Button>
              </Box>
            </FormGroup>
          </Form>
        </Formik>
        <Toaster
          position="top-right"
          toastOptions={{
            // Define default options
            className: '',
            duration: 3000,
            // Default options for specific types
            success: {
              duration: 3000,
            },
          }}
        />
      </div>
    </>
  );
};
export default ModuleFormik;
