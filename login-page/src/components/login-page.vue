<script setup>
// Function to hide/show password \\
function pswdHide() {
  var x = document.getElementById("input");
  var y = document.getElementById("input2");
  var z = document.getElementById("input3");

  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }

  if (y.type === "password") {
    y.type = "text";
  } else {
    y.type = "password";
  }

  if (z.type === "password") {
    z.type = "text";
  } else {
    z.type = "password";
  }
}
</script>

<template>
  <!-- Welcome Title -->
  <div class="container mt-5">
    <div class="row">
      <div class="col-12">
        <div class="fade-in-welcome text-color-white">
          <div class="typewriter">
            <h1>NoteTaker</h1>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Login Form (NOT HIDDEN) -->
  <div class="container mt-5 mx-auto bg-white rounded-3 fade-in-delay">
    <form class="form p-5 fade-in-form" id="login">
      <!-- Sign in -->
      <div class="container mt-3 text-center">
        <h1>Login</h1>
      </div>

      <!-- Avatar -->
      <div class="container mt-3">
        <div class="imgcontainer">
          <img
            src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_2x3.jpg"
            class="img-fluid"
            style="width: 300px; height: 300px"
            alt="Avatar"
          />
        </div>
      </div>

      <!-- Email -->
      <div class="font-bold container mt-3 was-validated">
        <h2>Email</h2>
        <label for="email" class="form-label"></label>
        <input
          class="form-control bg-transparent underline"
          id="email"
          type="text"
          placeholder="name@example.com"
          name="email"
          required
        />
        <div class="valid-feedback">Valid</div>
        <div class="invalid-feedback">Please fill out this field.</div>
      </div>

      <!-- Password -->
      <div class="font-bold container mt-3 was-validated">
        <h2>Password</h2>
        <label for="password" class="form-label"></label>
        <input
          class="form-control bg-transparent underline me-4"
          type="password"
          placeholder="password"
          id="input"
          name="password"
          required
        />
        <div class="valid-feedback">Valid</div>
        <div class="invalid-feedback">Please fill out this field.</div>
      </div>

      <!-- Show Password -->
      <div class="font-bold container mt-3">
        <label class="form-check-label">
          <input
            class="form-check-input me-2"
            type="checkbox"
            @click="pswdHide()"
          />Show Password
        </label>
      </div>

      <!-- Remember Me -->
      <div class="remember container mt-3">
        Remember me
        <label class="form-check-label">
          <input
            class="form-check-input ms-3"
            type="checkbox"
            name="remember"
          />
        </label>
      </div>

      <!-- Don't have an account? -->
      <div class="container mt-3">
        <a class="form-link" href="register" id="linkCreateAccount"
          >Don't have an account? Create one</a
        >
      </div>

      <!-- Login Button -->
      <div class="container mt-3 text-center">
        <a class="login-button" href="dashboard">Login</a>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
