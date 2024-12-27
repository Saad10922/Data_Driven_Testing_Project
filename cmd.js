const data = {
    "store1": {
      "storeName": "Downtown Plaza",
      "brands": [
        {
          "brandName": "ElectroMax",
          "products": [
            { "productId": "P001" },
            { "productId": "P002" }
          ]
        },
        {
          "brandName": "HomeEssentials",
          "products": [
            { "productId": "P003" },
            { "productId": "P004" }
          ]
        }
      ]
    },
    "store2": {
      "storeName": "Uptown Mall",
      "brands": [
        {
          "brandName": "FashionHub",
          "products": [
            { "productId": "P005" },
            { "productId": "P006" }
          ]
        },
        {
          "brandName": "TechGear",
          "products": [
            { "productId": "P007" },
            { "productId": "P008" }
          ]
        }
      ]
    },
    "store3": {
      "storeName": "Central Market",
      "brands": [
        {
          "brandName": "FreshFarms",
          "products": [
            { "productId": "P009" },
            { "productId": "P010" }
          ]
        },
        {
          "brandName": "GreenWorld",
          "products": [
            { "productId": "P011" },
            { "productId": "P012" }
          ]
        }
      ]
    },
    "store4": {
      "storeName": "Westside Outlet",
      "brands": [
        {
          "brandName": "AutoPro",
          "products": [
            { "productId": "P013" },
            { "productId": "P014" }
          ]
        },
        {
          "brandName": "SpeedySports",
          "products": [
            { "productId": "P015" },
            { "productId": "P016" }
          ]
        }
      ]
    }
  };
  
  const commands = {};
  
  for (const storeKey in data) {
    const store = data[storeKey];
    store.brands.forEach(brand => {
      brand.products.forEach(product => {
        const commandName = `jest:${brand.brandName}-${store.storeName.replace(/\s/g, '')}-${product.productId}`;
        const command = `powershell -Command \"$env:BRAND_NAME='${brand.brandName}'; $env:STORE_NAME='${store.storeName}'; $env:PRODUCT_ID='${product.productId}'; jest\"`;
        commands[commandName] = command;
      });
    });
  }
  
  console.log(JSON.stringify(commands, null, 2));
  