import axios from 'axios';
const CUSTOMER_API_BASE_URL="http://localhost:8080/api/v1/customers";
class EmployeeServices{
    getCustomers(){
        return axios.get(CUSTOMER_API_BASE_URL);
    }
    createCustomer(customer){
        return axios.post(CUSTOMER_API_BASE_URL,customer);
      
    }
    getEmployeeById(customerId){
        return axios.get(CUSTOMER_API_BASE_URL+'/'+customerId);
    }
    updateCustomer(customer,customerId){
        return axios.put(CUSTOMER_API_BASE_URL+'/'+customerId,customer);
    }
    
}
export default new EmployeeServices()