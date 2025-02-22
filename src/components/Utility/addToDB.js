const getStoredCartList = () =>{
    const storedListStr = localStorage.getItem('cart-list');
    if(storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }else{
        return [];
    }
}

const addToStoreCartList = (id) =>{
    const storedList = getStoredCartList();
    if(storedList.includes(id)){
        alert("Gadget already exists in your Cart!!!");
    }else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart-list',storedListStr);
        alert("Gadget added in your Cart!!!");
    }
}







const getStoredWishList = () =>{
    const storedWishStr = localStorage.getItem('wish-list');
    if(storedWishStr) {
        const storedWish = JSON.parse(storedWishStr);
        return storedWish;
    }else{
        return [];
    }
}

const addToStoreWishList = (id) =>{
    const storedWish = getStoredWishList();
    if(storedWish.includes(id)){
        alert("Gadget already exists in your wish list!");
    }else{
        storedWish.push(id);
        const storedWishStr = JSON.stringify(storedWish);
        localStorage.setItem('wish-list',storedWishStr);
        alert("Gadget added in your WishList!!!");
    }
}

export {addToStoreCartList,addToStoreWishList,getStoredCartList, getStoredWishList}