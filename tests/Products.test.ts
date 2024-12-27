import {test, describe, expect } from '@jest/globals';
import { dataMethods } from '../methods/Inventory';
import * as dotenv from 'dotenv';
dotenv.config()
const storeName = process.env.STORE_NAME || "Downtown Plaza"
const brandName = process.env.BRAND_NAME || "SpeedySports"
const productId = process.env.PRODUCT_ID || 'P003';


describe('Inventory Data Testing', ()=>{
  const store = dataMethods.getStoreNumber(storeName)

  afterAll(() => {
    delete process.env.BRAND_NAME;
    delete process.env.STORE_NAME;
    delete process.env.PRODUCTS_ID;
  });
test('Validate store IDs based on store numbers', ()=>{
  const storeIDs = {
    'store1' : 'S001',
    'store2' : 'S002',
    'store3' : 'S003',
    'store4' : 'S004',
  }
  const curr_ID = dataMethods.getStoreID(store);
  expect(curr_ID).toBe(storeIDs[store]) 
   console.log(store, " : ",curr_ID);
})
test('Validate store names based on store numbers', () => {
  const storeMapping = {
    'store1': 'Downtown Plaza',
    'store2': 'Uptown Mall',
    'store3': 'Central Market',
    'store4': 'Westside Outlet'
  };
  const store = dataMethods.getStoreNumber(storeName)
  expect(storeName).toBe(storeMapping[store]);
  
});

test('Check brand names for the Specific Stores',()=>{
  const storeBrands = {
    'Downtown Plaza' : ["ElectroMax", "HomeEssentials"],
    'Uptown Mall' : ["FashionHub", "TechGear"],
    'Central Market' : ["FreshFarms", "GreenWorld"],
    'Westside Outlet' : ["AutoPro", "SpeedySports"]
  }

  const ourBrands = dataMethods.getAllBrandNames(storeName)
  const expectBrands = storeBrands[storeName]
  expect(ourBrands).toEqual(expectBrands)
})

test('Test for Product Validation by Brand', ()=>{
  const expectedProductIDs = {
    'Downtown Plaza' : ["P001", "P002", "P003", "P004"],
    'Uptown Mall' : ["P005", "P006", "P007", "P008"],
    'Central Market' : ["P009", "P010", "P011", "P012"],
    'Westside Outlet' : ["P013", "P014", "P015", "P016"]
  }
  const store = dataMethods.getStoreNumber(storeName)
  const ourProducts = dataMethods.getAllProductIDs(store)
  
  const expectProducts : string[] = expectedProductIDs[storeName]
  console.log(ourProducts);
  console.log(expectProducts);
  expect(ourProducts).toEqual(expectProducts) //used toEqual bcz toBe uses the concept of reference Equality and toEqual uses the concept of Value Equality
})
test('Check Store ID Exists for a Store', () => {
  const storeIDs :string[] = ['S001', 'S002', 'S003', 'S004']
  const store  = dataMethods.getStoreNumber(storeName);
  const id = dataMethods.getStoreIdByName(store)
  expect(storeIDs).toContain(id);
});

test('Checks Brand consists of Expected Products', () => {
  const brandProducts = {
    "ElectroMax" : ['P001', 'P002'],
    "HomeEssentials" : ['P003', 'P004'],
    "FashionHub" : ['P005', 'P006'],
    "TechGear" : ['P007', 'P008'],
    "FreshFarms" : ['P009', 'P010'],
    "GreenWorld" : ['P011', 'P012'],
    "AutoPro" : ['P013', 'P014'],
    "SpeedySports" : ['P015', 'P016'],
  }
  const products = dataMethods.getAllProductsByBrand(brandName);
  expect(products).toEqual(brandProducts[brandName]);
});

test('Check Staff for a Brand', () => {
  const brandStaff = {
    "ElectroMax" : ['E001', 'E002'],
    "HomeEssentials" : ['E003', 'E004'],
    "FashionHub" : ['E005', 'E006'],
    "TechGear" : ['E007', 'E008'],
    "FreshFarms" : ['E009', 'E010'],
    "GreenWorld" : ['E011', 'E012'],
    "AutoPro" : ['E013', 'E014'],
    "SpeedySports" : ['E015', 'E016'],
};

  const staff = dataMethods.getStaffByBrand(brandName);
  expect(staff).toHaveLength(2);
  expect(staff).toEqual(brandStaff[brandName]);

});

test('Validate That Brand has Staff', () => {
  const brandLocation = {
    "ElectroMax" : 'L001',
    "HomeEssentials" : 'L002',
    "FashionHub" : 'L003',
    "TechGear" : 'L004',
    "FreshFarms" : 'L005',
    "GreenWorld" : 'L006',
    "AutoPro" : 'L007',
    "SpeedySports" :'L008'
};

  const locations = dataMethods.getLocationByBrand(brandName);
  expect(locations).toBe(brandLocation[brandName]);
});

test('Check if product exists', () => {
  const exists = dataMethods.checkProductExists(productId);
  expect(exists).toBe(true);
});



})
