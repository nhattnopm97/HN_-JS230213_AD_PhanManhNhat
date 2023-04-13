import React, { useState } from "react";

function Products() {
  const [products, setProducts] = useState([
    {
      quantity: 0,
      id: 1,
      title: "Cola",
      price: 6,
      image:
        "https://ayb.akinoncdn.com/products/2019/01/18/3544/5aa1ee14-1c83-4213-a62b-773c4785e187_size780x780_quality60_cropCenter.jpg",
    },
    {
      quantity: 0,
      id: 2,
      title: "Fanta",
      price: 5,
      image:
        "https://www.coca-cola.com.tr/content/dam/one/tr/tr/product-images/fanta-portakal_product_image.png",
    },
    {
      quantity: 0,
      id: 3,
      title: "Sprite",
      price: 5,
      image: "https://images.ofix.com/product-image/s99509_2.jpg",
    },
    {
      quantity: 0,
      id: 4,
      title: "Ayran",
      price: 3,
      image:
        "https://konyamevlana.com/florya/wp-content/uploads/2020/12/sutas-ayran-285ml.jpg",
    },
    {
      quantity: 0,
      id: 5,
      title: "Salgam",
      price: 4,
      image: "http://esenlik.com.tr//images/prod/5704.jpg",
    },
    {
      quantity: 0,
      id: 6,
      title: "Cay",
      price: 3,
      image:
        "https://evidea.akinoncdn.com/products/2021/08/05/62421/e5bda9ce-91bf-453a-96e1-acea983efb2a.jpg",
    },
    {
      quantity: 0,
      id: 7,
      title: "Kahve",
      price: 10,
      image:
        "https://media.istockphoto.com/photos/turkish-coffee-foamy-picture-id510413268?k=20&m=510413268&s=612x612&w=0&h=llBhDOUbNHaQXc-ch7UQ_OIWkmJAJUzaf6oZavKUrmQ=",
    },
    {
      quantity: 0,
      id: 8,
      title: "Soda",
      price: 4,
      image: "http://esenlik.com.tr//images/prod/2928.jpg",
    },
    {
      quantity: 0,
      id: 9,
      title: "Bisiklet",
      price: 1000,
      image:
        "https://productimages.hepsiburada.net/s/37/375/10567819821106.jpg",
    },
    {
      quantity: 0,
      id: 10,
      title: "Lüx Kol Saati",
      price: 25000,
      image:
        "https://www.dogansaatcilik.com.tr/ProductImages/118687/big/seiko-ssc719p-erkek-kol-saati__0296960735052182.jpg",
    },
    {
      quantity: 0,
      id: 11,
      title: "Bugatti Chiron",
      price: 2500000,
      image:
        "https://productimages.hepsiburada.net/s/34/375/10460429320242.jpg",
    },
    {
      quantity: 0,
      id: 12,
      title: "Iskender",
      price: 50,
      image:
        "https://img3.aksam.com.tr/imgsdisk/2020/10/31/t25_en-kolay-iskender-sosu-ta-744.jpg",
    },
    {
      quantity: 0,
      id: 13,
      title: "Lahmacun",
      price: 12,
      image:
        "https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg",
    },
    {
      quantity: 0,
      id: 14,
      title: "Malikane",
      price: 2500000000,
      image:
        "https://foto.haberler.com/haber/2020/12/07/israil-de-4-odali-malikane-250-milyon-dolarda-13784975_amp.jpg",
    },
    {
      quantity: 0,
      id: 15,
      title: "Helicopter",
      price: 28750000,
      image:
        "https://image.elitema.com.tr/db_images/224/4/11/arimg1138-8---bell-429-exter%C4%B1or.jpg",
    },
    {
      quantity: 0,
      id: 16,
      title: "Luxury Yatch",
      price: 17500000,
      image: "https://d.neoldu.com/news/57966.jpg",
    },
    {
      quantity: 0,
      id: 17,
      title: "Limosine",
      price: 1000000,
      image:
        "https://img.paratic.com/dosya/2015/03/dunyanin-en-pahali-limuzinleri-1024x683.jpg",
    },
    {
      quantity: 0,
      id: 18,
      title: "Ada",
      price: 125000000,
      image: "https://icdn.ensonhaber.com/resimler/galeri/1_11195.jpg",
    },
    {
      quantity: 0,
      id: 22,
      title: "Stadium",
      price: 2500000,
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2020/06/01/thumbs_b_c_dc24a18cc233bd960f410911f5d39bf2.jpg",
    },
    {
      quantity: 0,
      id: 23,
      title: "Bitcoin",
      price: 60000,
      image:
        "https://www.cumhuriyet.com.tr/Archive/2021/9/27/1872247/kapak_141123.jpg",
    },
    {
      quantity: 0,
      id: 19,
      title: "Messi Tshirt",
      price: 250,
      image:
        "https://st2.myideasoft.com/idea/fr/55/myassets/products/366/paris-saint-germain-cup-away-stadium-shirt-2021-22-kids-with-messi-30-printing-ss4-p-12087703-u-6v44pc9ht2ynaiyuv5uk-v-af3dfad2f9b44448a3068821419095db_min.jpg?revision=1628627354",
    },
  ]);
  const [money, setMoney] = useState(128000000000);
  const [cart, setCart] = useState("");
  const [total, setTotal] = useState(0);

  const handleAdd = (event, id) => {
    let newProducts = [...products];
    let changeMoney = money - newProducts[id].quantity * newProducts[id].price;
    if (changeMoney < 0) {
      alert("Không đủ tiền r b êi!");
      return;
    }
    let newCart = [...cart];
    if (cart === "") {
      newCart.push(newProducts[id]);
      setCart(newCart);
      setTotal(newCart[0].price * (newCart[0].quantity + 1));
    } else {
      let flag = true;
      for (var i = 0; i < newCart.length; i++) {
        if (newCart[i] == newProducts[id]) {
          flag = false;
          break;
        }
      }
      if (!flag) {
        newCart.splice(i, 1, newProducts[id]);
        setCart(newCart);
        let newTotal = total;
        setTotal((newTotal += newCart[i].price * (newCart[i].quantity + 1)));
      } else {
        newCart.push(newProducts[id]);
        setCart(newCart);
        let newTotal = total;
        setTotal(
          (newTotal += newProducts[id].price * (newProducts[id].quantity + 1))
        );
      }
    }
    setMoney(changeMoney);
    newProducts[id].quantity = event + 1;
    setProducts(newProducts);
  };

  const handleInterest = (event, id) => {
    let newProducts = [...products];
    let newCart = [...cart];
    if (cart !== "") {
      let flag = true;
      for (var i = 0; i < newCart.length; i++) {
        console.log(newCart[i].id == newProducts[id].id);
        if (newCart[i].id == newProducts[id].id) {
          flag = false;
          break;
        }
      }
      if (!flag) {
        if (event === 1) {
          console.log(newCart);
          newCart.splice(i, 1);
          setCart(newCart);
        } else {
          newCart.splice(i, 1, newProducts[id]);
          setCart(newCart);
        }
      } else {
        newCart.splice(i, 1, newProducts[id]);
        setCart(newCart);
      }
    }
    if (newProducts[id].quantity == 0) {
      setProducts(newProducts);
      return false;
    } else {
      newProducts[id].quantity = event - 1;
      let changeMoney =
        money + newProducts[id].quantity * newProducts[id].price;
      setMoney(changeMoney);
      setProducts(newProducts);
    }
  };

  const handleResetCart=()=>{
    setTotal(0);
    setCart("");
  }

  return (
    <div>
      <div className="headerProducts">
        To spend ${money.toLocaleString()} You have a lot of money
      </div>
      <div className="container">
        {products.map((products, id) => (
          <div className="element" key={id}>
            <img className="imageProduct" src={products.image} alt="" />
            <div className="nameAndPrice">
              {products.title} ------- ${products.price.toLocaleString()}
            </div>
            <div className="inputQuantity">
              <button
                onClick={() => {
                  handleInterest(products.quantity, id);
                }}
              >
                Interest
              </button>
              <span className="quantity">{products.quantity}</span>
              <button
                onClick={() => {
                  handleAdd(products.quantity, id);
                }}
              >
                Add
              </button>
            </div>
          </div>
        ))}
        ;
      </div>
      <div className="Cart">
        <div className="containerCart">
          {cart !== "" ? (
            cart.map((a, b) => (
              <div className="elementCart" key={b}>
                {a.title}- ${a.price.toLocaleString()}: {a.quantity} cái: ${(a.quantity * a.price).toLocaleString()}
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
        <div className="totalCart">Tổng:${total.toLocaleString()}</div>
        <button onClick={handleResetCart}>Reset Cart</button>
      </div>
    </div>
  );
}

export default Products;
// {
//     quantity: 0,
//     id: 1,
//     title: "Cola",
//     price: 6,
//     image:
//       "https://ayb.akinoncdn.com/products/2019/01/18/3544/5aa1ee14-1c83-4213-a62b-773c4785e187_size780x780_quality60_cropCenter.jpg",
//   }
