import { useSelector, useDispatch } from 'react-redux';
import { useState} from 'react';
import {
  selectUsers,
  selectProducts,
  selectCount,
  selectMails,
  selectMail,
  getUnCheckProducts,
  updateProductStatus,
  updateProductsOrderid,
  getUsers,
  searchUsers,
  getProducts,
  searchProducts,
  getMails,
} from '../../redux/slices/adminSlice/adminSlice';

export default function useAdmin() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const products = useSelector(selectProducts);
  const count = useSelector(selectCount);
  const mails = useSelector(selectMails);
  const mail = useSelector(selectMail);
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [params, setParams] = useState({
    sort: 'createdAt',
    order: 'DESC',
  });
  const [productParams, setProductParams] = useState({
    status: 'all',
    sort: 'createdAt',
    order: 'DESC',
  });


  const [passedProduct,setPassedProduct] = useState({});

  
  var [passedProducts, setPassedProducts] = useState([]);


  // const pProducts = useMemo(()=>{
  //   if(passedProducts.length!=0){
  //     return passedProducts
  //   }
  //   return []
  // },[passedProducts])

  const handleGetUnCheckProducts = (page) =>
    getUnCheckProducts(page)(dispatch).then((result) => result);
  const handleUpdateProductStatus = (id, status) =>
    updateProductStatus(id, status)(dispatch).then((result) => result);
  const handleUpdateProductsOrderid = (ids, orderids) =>
      updateProductsOrderid(ids, orderids)(dispatch).then((result) => result);
  const handleGetUsers = (params) =>
    getUsers(params)(dispatch).then((result) => result);
  const handleSearchUsers = (keyword) =>
    searchUsers(keyword)(dispatch).then((result) => result);
  const handleGetProducts = (params) =>
    getProducts(params)(dispatch).then((result) => result);
  const handleSearchProducts = (params) =>
    searchProducts(params)(dispatch).then((result) => result);
  const handleGetMails = () => getMails()(dispatch).then((result) => result);

  // const handleUpdateOrderid = (addresses,tokenids,orderids) => {
  //
  //   handleUpdateProductsOrderid(product.id, status);
  // };


  const handleChangeSelector = (e, product) => {
    setValue(e.target.value);
    setIsChecked(true);
    const status = e.target.value === '??????' ? '1' : '2';
    if(status === '1'){
      // const newPasseds =  passedProducts
      // newPasseds.push(product)
      // setPassedProducts(newPasseds)
      // // passedProducts.push(product)
      setPassedProduct(product)
      // passedProducts.push(product)
      // setPassedProducts(passedProducts)
    // }else{
    //   setPassedProducts(passedProducts.filter(v => v.id != product.id))
    }
    // product.status = status
    // handleUpdateProductStatus(product.id, status);
  };

  const handleSearchingUsers = (value) => {
    setKeyword(value);
    setIsSearch(true);
    setParams({
      ...params,
      keyword: value ? value : keyword,
    });
    handleSearchUsers({
      ...params,
      keyword: value ? value : keyword,
    });
  };

  const handleSearchingProducts = (value) => {
    setKeyword(value);
    setIsSearch(true);
    setProductParams({
      ...productParams,
      keyword: value ? value : keyword,
    });
    handleSearchProducts({
      ...productParams,
      keyword: value ? value : keyword,
    });
  };

  const formatter = new Intl.NumberFormat('zh-TW', {
    style: 'currency',
    currency: 'NTD',
    minimumFractionDigits: 0,
  });

  const setThousandths = (price) => formatter.format(price);

  return {
    users,
    products,
    page,
    count,
    mail,
    mails,
    value,
    keyword,
    params,
    productParams,
    passedProduct,
    isChecked,
    isSearch,
    setProductParams,
    setPage,
    setThousandths,
    setValue,
    setIsChecked,
    setKeyword,
    setParams,
    setPassedProduct,
    handleGetUnCheckProducts,
    handleUpdateProductStatus,
    handleGetUsers,
    handleSearchUsers,
    handleGetProducts,
    handleSearchProducts,
    handleGetMails,
    handleChangeSelector,
    handleSearchingUsers,
    handleSearchingProducts,
    handleUpdateProductsOrderid,
    passedProducts, setPassedProducts
  };
}
