import {client} from '../../lib/client';
import Product from '@/components/products/product/Product';

import { useRouter } from 'next/router';
import react from 'react';
import { Layout } from '@/components';
function ProductDetails({laptops,gamingpc,keybords,mousepad}) {
  const router = useRouter();
  const { slug } = router.query;

  let productComponent = null;

  switch (slug) {
    case 'gaming-laptop':
      productComponent = <Product Products={laptops}  productname={'laptops'}/>;
      break;
    case 'gaming-desktop':
      productComponent = <Product Products={gamingpc}  productname={'gamingpc'}/>;
      break;
    case 'keybord':
      productComponent = <Product Products={keybords}  productname={'keybords'}/>;
      break;
    case 'mouse':
      productComponent = <Product Products={mousepad}  productname={'mousepad'}/>;
      break;
    default:
      productComponent = <div>Invalid product type</div>;
  }

  return (
    <div>
        <Layout>
      {productComponent}
      
      </Layout>
    </div>
  );
}

export const getServerSideProps = async () => {
    const query='*[_type == "laptops"]';
    const laptops = await client.fetch(query);
    const query2='*[_type == "gamingpc"]';
    const gamingpc = await client.fetch(query2);
  
    const query4='*[_type == "keybords"]';
    const keybords = await client.fetch(query4);
    const query5='*[_type == "mousepad"]';
    const mousepad = await client.fetch(query5);
  
    return {
      props:{laptops,gamingpc,keybords,mousepad}
    }
  }

export default ProductDetails;
