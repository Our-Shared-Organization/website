<script setup>
async function auth(login, password) {
  try {
    const res = await fetch(`http://localhost:5053/user/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "login": login,
        "password": password
      })
    });
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

// await auth("+5", "123")

async function register(name, surname, phone, sex, password) {
  try {
    const res = await fetch(`http://localhost:5053/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "userName": name,
        "userSurname": surname,
        "userPhone": phone,
        "userSex": sex,
        "userPassword": password
      })
    })
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

// await register("anewone_email", "1231", "name", "surname", "123123")

async function addService(name, description, duration, price, categoryId) {
  try {
    const res = await fetch(`http://localhost:5053/service/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": name,
        "description": description,
        "duration": duration,
        "price": price,
        "categoryId": categoryId
      })
    })
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

// addService("service1", "description1", 60, 1000, 1)

async function addBooking(userId, serviceId, start, finish, status) {
  try {
    const res = await fetch(`http://localhost:5053/booking/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "bookingUserId": userId,
        "bookingServiceId": serviceId,
        "bookingStart": start,
        "bookingFinish": finish,
        "bookingStatus": status
      })
    })
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

// addBooking(1, 1, "2024-06-20T10:00:00", "2024-06-20T11:00:00", "active")
</script>

<template>
  <RouterView/>
</template>
