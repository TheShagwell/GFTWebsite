import { getAll_Curriencies, add_Curriencies } from './base'
import { decryptUsingAES256, encryptUsingAES256} from '../utils/functions'


export const getAllCurrencies = async() => {
  try {
    const request = await fetch(getAll_Curriencies)
    const response = await request.json()
    return(response.data)
    console.log(response)
  } catch (err) {
    console.log(err)
  }
}

export const addCurrencies = async(currencies) => {
  try {
    const request = await fetch(add_Curriencies, {
      method: 'POST',
      body: encryptUsingAES256(JSON.stringify(currencies), import.meta.env["VITE_API_GTF"], import.meta.env["VITE_API_GTF"])
    })
    const response = await request.json()
    return(response.data)
  }
    catch (err) {
      console.log(err)
      return { error: true, message: err.message }
    }
}
