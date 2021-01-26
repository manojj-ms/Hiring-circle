import { message } from "antd";

const getBase64 = (img:any, callback:any) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

const allowOnlyJpgPng = (file:File) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    return isJpgOrPng;
}

const getVariablePrice = (data:any) => {
  if(!data.variation_details || data.variation_details.length === 0) {
    return `S$${parseFloat(data.price).toFixed(2)}`
  }else {
    let variations = [...data.variation_details]
    let sorted = variations.sort((a:any,b:any) => parseFloat(a.price) - parseFloat(b.price))
    if (sorted[0].price === sorted[sorted.length-1].price) {
      return `S$${sorted[0].price}`
    }else {
      return `S$${sorted[0].price} - S$${sorted[sorted.length-1].price}`
    }
    
  }
}

const getLowestVariablePrice = (data:any) => {
  if(!data.variation_details || data.variation_details.length === 0) {
    return `S$${parseFloat(data.price).toFixed(2)}`
  }else {
    let variations = [...data.variation_details]
    let sorted = variations.sort((a:any,b:any) => parseFloat(a.price) - parseFloat(b.price))
    return `S$${parseFloat(sorted[0].price).toFixed(2)}`;
  }
}

const getVariableStock = (data:any) => {
  if(!data.variation_details || data.variation_details.length === 0) {
    return data.stock;
  }else {
    let total = 0;
    data.variation_details.forEach((variat:any) => {
      total+=variat.stock;
    })
    return total;
  }
}

const googleOauthSuccessHandler = (response:any) => {
  return { name: response.profileObj.name as string, email: response.profileObj.email as string}
}

const googleOauthFailureHandler = (response:any) => {
  message.error("Failed: " + response && response.error ? (response.error).replace('_', ' ') : "Unable to authenticate")
}

export { allowOnlyJpgPng, getBase64, getVariablePrice, getVariableStock, getLowestVariablePrice, googleOauthSuccessHandler, googleOauthFailureHandler }