import { BRAND } from "@/types/brand";
import Image from "next/image";

const brandData: BRAND[] = [
  {
    logo: "/images/product/product-01.png",
    name: "Abstract 3D",
    description: "A product name is required and recommended to be unique.",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/images/product/product-02.png",
    name: "Macbook Air M1",
    description: "A product name is required and recommended to be unique.",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: "/images/product/product-03.png",
    name: "Github",
    description: "A product name is required and recommended to be unique.",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/images/product/product-04.png",
    name: "Vimeo",
    description: "A product name is required and recommended to be unique.",
    visitors: 1.5,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: "/images/product/product-01.png",
    name: "Facebook",
    description: "A product name is required and recommended to be unique.",
    visitors: 3.5,
    revenues: "6,768",
    sales: 390,
    conversion: 4.2,
  },
];

const TableOne = () => {
  return (
    <div className="rounded-lg bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Product Sell
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-4 rounded-sm border-b border-stroke">
          <div className="p-2 xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">
              Product Name
            </h5>
          </div>
          <div className="p-2 text-center xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">
              Stock 
            </h5>
          </div>
          <div className="p-2 text-center xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">
              Price 
            </h5>
          </div>
          <div className="p-2 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">
              Total Sales
            </h5>
          </div>          
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-4 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2 xl:p-5">
              <div className="flex-shrink-0">
                <Image src={brand.logo} alt="Brand" width={48} height={48} />
              </div>
              <div className="whitespace-nowrap">
                <p className="text-black dark:text-white sm:block font-bold text-base">
                  {brand.name}
                </p>
                <p className="text-black dark:text-white sm:block text-sm">
                  {brand.description}
                </p>
                </div>
            </div>

            <div className="flex items-center justify-center p-2 xl:p-5">
              <p className="text-black dark:text-white">{brand.visitors}K</p>
            </div>

            <div className="flex items-center justify-center p-2 xl:p-5">
              <p className="text-meta-3">${brand.revenues}</p>
            </div>

            <div className="items-center justify-center p-2 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.sales}</p>
            </div>            
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
