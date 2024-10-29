const baseURL = "http://localhost:3000";
let userName = "Not logged in";
let userId = -1;

async function refreshOrders(userId) {
  try {
    const response = await fetch(`${baseURL}/orders/user-orders/${userId}`, {
      credentials: "include",
    });

    if (!response.ok) {
      console.log(response);
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    document.getElementById("user-orders").innerHTML = ""
    if (data.message) {
        document.getElementById("user-orders").innerHTML = data.message;
        return;
    }
    if (Array.isArray(data)) {
      data.forEach((order, index) => {
        const userOrder = document.createElement("div");
        userOrder.className = "user-order";

        const orderId = document.createElement("div");
        orderId.className = "order-id";
        orderId.innerHTML = "Order#: <span>" + (index + 1) + "</span>";
        userOrder.appendChild(orderId);

        const orderTotalPrice = document.createElement("div");
        orderTotalPrice.className = "order-total-price";
        orderTotalPrice.innerHTML =
          "Total price: <span>" + order.totalPrice + "</span>";
        userOrder.appendChild(orderTotalPrice);

        const orderDetails = order.OrderDetails;
        if (orderDetails) {
          const cdsElement = document.createElement("div");
          cdsElement.className = "cds";
          orderDetails.forEach((cd, indexCD) => {
            const cdInfo = document.createElement("div");
            cdInfo.className = "cd-info";
            // cdInfo.id = "cd-info-" + (indexCD + 1);

            const cdId = document.createElement("div");
            cdId.className = "cd-id";
            cdId.innerHTML = "CD#: <span>" + (indexCD + 1) + "</span>";
            cdInfo.appendChild(cdId);

            const cdArtist = document.createElement("div");
            cdArtist.className = "cd-quantity";
            cdArtist.innerHTML = "Artist: " + cd.CompactDisk.Artist.name + "</span>";
            cdInfo.appendChild(cdArtist);

            const title = document.createElement("div");
            title.className = "title";
            title.innerHTML = "CD title: " + cd.CompactDisk.title + "</span>";
            cdInfo.appendChild(title);

            const price = document.createElement("div");
            price.className = "title";
            price.innerHTML = "Price: " + cd.CompactDisk.price + "</span>";
            cdInfo.appendChild(price);

            const quantity = document.createElement("div");
            quantity.className = "cd-quantity";
            quantity.innerHTML = "Quantity: " + cd.quantity + "</span>";
            cdInfo.appendChild(quantity);
            cdsElement.appendChild(cdInfo);
          });
          userOrder.appendChild(cdsElement);
        }

        document.getElementById("user-orders").appendChild(userOrder);
      });
    }
    // if (data.userName && data.userId) {
    //   userName = data.userName;
    //   userId = data.userId;
    // }
  } catch (err) {
    console.log(err);
  }
}

async function userLogin(userEmail, userPassword) {
  try {
    const response = await fetch(`${baseURL}/login`, {
      credentials: "include",
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    });

    if (!response.ok) {
      console.log(response.Error);
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    if (data.userName && data.userId) {
      userName = data.userName;
      userId = data.userId;
    }
    if (this.userId != -1) {
      refreshOrders(userId);
    }
  } catch (err) {
    console.log(err);
  }
}

document.getElementById("login-btn").onclick = async function () {
  await userLogin(
    document.getElementById("email").value,
    document.getElementById("password").value
  );
  document.getElementById("user-name").innerText = userName;
};

document.getElementById("user-name").innerText = userName;
