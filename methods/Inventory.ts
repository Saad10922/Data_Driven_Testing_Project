const data = require('../data_folder/inventory.json')

function getStoreID(store : string) : string
{
  return data[store]['storeId']
}
function getStoreName(store : string) : string
{
  return data[store]['storeName']
}
function getAllBrandNames(storeName: string): string[] | null {
  const stores = {
    'store1': 'Downtown Plaza',
    'store2': 'Uptown Mall',
    'store3': 'Central Market',
    'store4': 'Westside Outlet'
  };
  let brandNames: string[] = []
  if(storeName === stores.store1)
    data['store1']['brands'].forEach(brand => {
      brandNames.push(brand.brandName)
    });
  else if(storeName === stores.store2)
    data['store2']['brands'].forEach(brand => {
      brandNames.push(brand.brandName)
    });
  else if(storeName === stores.store3)
    data['store3']['brands'].forEach(brand => {
      brandNames.push(brand.brandName)
    });
  else if(storeName === stores.store4)
    data['store4']['brands'].forEach(brand => {
      brandNames.push(brand.brandName)
    });
  else
    return null
  return brandNames
}

function getAllProductIDs(storeName: string) : string[] {
 const currBrands : string[] = data[storeName]['brands']
 let brandProducts : string[] = [];
 currBrands.forEach(brand => {
  brand['products'].forEach(product => {
    brandProducts.push(product['productId'])
  });
 });
 return brandProducts
}
function getStoreNumber(name : string) : string {
  if(name === 'Downtown Plaza' )
    return 'store1'
  if(name === 'Uptown Mall' )
    return 'store2'
  if(name === 'Central Market')
    return 'store3' 
  if(name === 'Westside Outlet')
    return 'store4'
  else
    return 'store1'
}
interface Product {
  productId: string;
  productName: string;
  price: number;
}

interface Staff {
  staffId: string;
  name: string;
  position: string;
}

interface Location {
  locationId: string;
  address: string;
  zipCode: string;
}

interface Brand {
  brandName: string;
  products: Product[];
  locations: Location[];
  staff: Staff[];
}

interface Store {
  storeId: string;
  storeName: string;
  brands: Brand[];
}


const stores: Record<string, Store> = data;

function getStoreByName(storeName: string): Store | undefined {
  return Object.values(stores).find(store => store.storeName === storeName);
}

function getAllProductsByBrand(brandName: string): string[] {
  const products: string[] = [];
  Object.values(stores).forEach(store => {
      store.brands.forEach(brand => {
          if (brand.brandName === brandName) {
              brand.products.forEach(product => products.push(product.productId));
          }
      });
  });
  return products;
}

function getStaffByBrand(brandName: string): string[] {
  let staffList: string[] = [];
  Object.values(stores).forEach(store => {
      store.brands.forEach(brand => {
          if (brand.brandName === brandName) {
              for (let count = 0; count < 2; count++) {
                staffList.push(brand['staff'][count]['staffId']);
              }
          }
      });
  });
  return staffList;
}

function getLocationByBrand(brandName: string): string | void {
  let location: string;

  for (let store of Object.values(stores)) {
    for (let brand of store.brands) {
      if (brand['brandName'] === brandName) {
        location = brand['locations'][0]['locationId'];
        return location; // Return the locationId and exit function
      }
    }
  }

}


function checkProductExists(productId: string): boolean {
  let exists = false;
  Object.values(stores).forEach(store => {
      store.brands.forEach(brand => {
          brand.products.forEach(product => {
              if (product.productId === productId) exists = true;
          });
      });
  });
  return exists;
}

function getStoreIdByName(storeName : string): string | void {
  const storeIDs :string[] = ['S001', 'S002', 'S003', 'S004']
  if(storeName === 'store1')
    return  storeIDs[0]
  if(storeName === 'store2')
    return  storeIDs[1]
  if(storeName === 'store3')
    return  storeIDs[2]
  if(storeName === 'store4')
    return  storeIDs[3]
}
export const dataMethods = {
  getStoreID,
  getStoreName,
  getAllBrandNames,
  getAllProductIDs,
  getStoreNumber,
  getStoreByName,
  getAllProductsByBrand,
  getStaffByBrand,
  getLocationByBrand,
  checkProductExists,
  getStoreIdByName
}



