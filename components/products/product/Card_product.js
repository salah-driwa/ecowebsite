import { urlfor } from '@/lib/client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CardProduct = ({ product, type }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="rounded-lg  w-64 h-80 m-2 overflow-hidden shadow-md bg-slate-100"
    >
      <Link href={`/${type}/${product._id}`}>
        <div key={product._id}>
          <div className="h-48">
            {product.image && (
              <img
                src={urlfor(product.image[0])}
                alt={product.name}
                className="w-full  h-full object-cover"
              />
            )}
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-left">{product.name}</h3>
            <p className="text-md text-left text-gray-600">Price: {product.price}  DT</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CardProduct;
