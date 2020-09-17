import axios from 'axios';
const SUPPLIER_API_BASE_URL="http://localhost:8080/api/v1/supplier";
class SupplierServices{
    getSuppliers(){
        return axios.get(SUPPLIER_API_BASE_URL);
    }
    createSupplier(supplier){
        return axios.post(SUPPLIER_API_BASE_URL,customer);
    }
    getSupplierById(supplierId){
        return axios.get(SUPPLIER_API_BASE_URL+'/'+customerId);
    }
    updateSupplier(supplier,supplierId){
        return axios.put(SUPPLIER_API_BASE_URL+'/'+customerId,customer);
    }
    
}
export default new SupplierServices()