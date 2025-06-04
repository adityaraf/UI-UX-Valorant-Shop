// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    })

    // Close menu when clicking on a nav link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
      })
    })
  }

  // Product Detail Page - Quantity Selector
  const quantityBtns = document.querySelectorAll(".quantity-btn")
  if (quantityBtns.length > 0) {
    quantityBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const input = this.parentElement.querySelector(".quantity-input")
        let value = Number.parseInt(input.value)

        if (this.classList.contains("plus")) {
          value = value < 10 ? value + 1 : 10
        } else if (this.classList.contains("minus")) {
          value = value > 1 ? value - 1 : 1
        }

        input.value = value
      })
    })
  }

  // Product Detail Page - Tabs
  const tabBtns = document.querySelectorAll(".tab-btn")
  if (tabBtns.length > 0) {
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Remove active class from all buttons and panels
        document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"))
        document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"))

        // Add active class to clicked button
        this.classList.add("active")

        // Show corresponding panel
        const tabId = this.getAttribute("data-tab")
        document.getElementById(tabId).classList.add("active")
      })
    })
  }

  // Product Detail Page - Variant Selection
  const variantBtns = document.querySelectorAll(".variant-btn")
  if (variantBtns.length > 0) {
    variantBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Remove active class from all variant buttons
        document.querySelectorAll(".variant-btn").forEach((b) => b.classList.remove("active"))

        // Add active class to clicked button
        this.classList.add("active")
      })
    })
  }

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll(".faq-question")
  if (faqQuestions.length > 0) {
    faqQuestions.forEach((question) => {
      question.addEventListener("click", function () {
        const answer = this.nextElementSibling
        const isOpen = answer.style.display === "block"

        // Close all answers
        document.querySelectorAll(".faq-answer").forEach((a) => {
          a.style.display = "none"
        })

        // Update all question indicators
        document.querySelectorAll(".faq-question").forEach((q) => {
          q.style.fontWeight = "600"
          q.style.color = "var(--secondary-color)"
        })

        // If the clicked question wasn't open, open it
        if (!isOpen) {
          answer.style.display = "block"
          this.style.fontWeight = "700"
          this.style.color = "var(--primary-color)"
        }
      })
    })
  }

  // Add to Cart Functionality
  const addToCartBtns = document.querySelectorAll(".add-to-cart, .add-to-cart-btn")
  if (addToCartBtns.length > 0) {
    addToCartBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // In a real application, this would add the product to the cart
        // For this demo, we'll just show an alert
        alert("Product added to cart!")
      })
    })
  }

  // Buy Now Functionality
  const buyNowBtn = document.querySelector(".buy-now-btn")
  if (buyNowBtn) {
    buyNowBtn.addEventListener("click", () => {
      // In a real application, this would add the product to the cart and redirect to checkout
      // For this demo, we'll just redirect to the cart page
      window.location.href = "cart.html"
    })
  }

  // Checkout Button
  const checkoutBtn = document.querySelector(".checkout-btn")
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      // In a real application, this would redirect to the checkout page
      // For this demo, we'll just show an alert
      alert("Proceeding to checkout...")
    })
  }

  // Remove Item from Cart
  const removeItemBtns = document.querySelectorAll(".remove-item")
  if (removeItemBtns.length > 0) {
    removeItemBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // In a real application, this would remove the item from the cart
        // For this demo, we'll just remove the element from the DOM
        const cartItem = this.closest(".cart-item")
        cartItem.style.opacity = "0"
        setTimeout(() => {
          cartItem.remove()
          // Update cart summary (in a real app)
          alert("Item removed from cart!")
        }, 300)
      })
    })
  }

  // Save for Later
  const saveForLaterBtns = document.querySelectorAll(".save-for-later")
  if (saveForLaterBtns.length > 0) {
    saveForLaterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // In a real application, this would move the item to the saved items
        // For this demo, we'll just show an alert
        alert("Item saved for later!")
      })
    })
  }

  // Move to Cart
  const moveToCartBtns = document.querySelectorAll(".move-to-cart")
  if (moveToCartBtns.length > 0) {
    moveToCartBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // In a real application, this would move the item to the cart
        // For this demo, we'll just show an alert
        alert("Item moved to cart!")
      })
    })
  }

  // Newsletter Form Submission
  const newsletterForm = document.querySelector(".newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector('input[type="email"]').value
      if (email) {
        alert(`Thank you for subscribing with ${email}!`)
        this.reset()
      }
    })
  }

  // Login Form Submission
  const loginForm = document.querySelector(".login-form")
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector("#email").value
      const password = this.querySelector("#password").value
      if (email && password) {
        // In a real application, this would authenticate the user
        // For this demo, we'll just show an alert
        alert(`Login attempt with ${email}`)
      }
    })
  }

  // Filter Button
  const filterButton = document.querySelector(".filter-button")
  if (filterButton) {
    filterButton.addEventListener("click", () => {
      // In a real application, this would filter the products
      // For this demo, we'll just show an alert
      alert("Filters applied!")
    })
  }
})

// Payment Modal Functionality
document.addEventListener("DOMContentLoaded", () => {
  const proceedToCheckoutBtn = document.getElementById("proceedToCheckout")
  const paymentModal = document.getElementById("paymentModal")
  const closeModal = document.getElementById("closeModal")
  const cancelPayment = document.getElementById("cancelPayment")
  const confirmPayment = document.getElementById("confirmPayment")
  const paymentOptions = document.querySelectorAll(".payment-option-popup")
  const qrisPayment = document.getElementById("qrisPayment")
  const gopayPayment = document.getElementById("gopayPayment")
  const paymentTimer = document.getElementById("paymentTimer")

  // Open payment modal
  if (proceedToCheckoutBtn) {
    proceedToCheckoutBtn.addEventListener("click", () => {
      paymentModal.classList.add("active")
      document.body.style.overflow = "hidden"
    })
  }

  // Close payment modal
  function closePaymentModal() {
    paymentModal.classList.remove("active")
    document.body.style.overflow = "auto"
    resetPaymentForm()
  }

  if (closeModal) {
    closeModal.addEventListener("click", closePaymentModal)
  }

  if (cancelPayment) {
    cancelPayment.addEventListener("click", closePaymentModal)
  }

  // Close modal when clicking overlay
  if (paymentModal) {
    paymentModal.addEventListener("click", (e) => {
      if (e.target === paymentModal || e.target.classList.contains("payment-modal-overlay")) {
        closePaymentModal()
      }
    })
  }

  // Payment method selection
  paymentOptions.forEach((option) => {
    option.addEventListener("click", function () {
      // Remove selected class from all options
      paymentOptions.forEach((opt) => opt.classList.remove("selected"))

      // Add selected class to clicked option
      this.classList.add("selected")

      // Check the radio button
      const radio = this.querySelector('input[type="radio"]')
      radio.checked = true

      // Show corresponding payment section
      const method = this.dataset.method
      hideAllPaymentSections()

      if (method === "qris") {
        qrisPayment.style.display = "block"
        startPaymentTimer()
      } else if (method === "gopay") {
        gopayPayment.style.display = "block"
      }

      // Enable confirm button
      confirmPayment.disabled = false
    })
  })

  // Hide all payment sections
  function hideAllPaymentSections() {
    if (qrisPayment) qrisPayment.style.display = "none"
    if (gopayPayment) gopayPayment.style.display = "none"
  }

  // Reset payment form
  function resetPaymentForm() {
    paymentOptions.forEach((opt) => opt.classList.remove("selected"))
    document.querySelectorAll('input[name="payment-method"]').forEach((radio) => (radio.checked = false))
    hideAllPaymentSections()
    confirmPayment.disabled = true
    clearInterval(timerInterval)
  }

  // Payment timer for QRIS
  let timerInterval
  function startPaymentTimer() {
    let timeLeft = 15 * 60 // 15 minutes in seconds

    timerInterval = setInterval(() => {
      const minutes = Math.floor(timeLeft / 60)
      const seconds = timeLeft % 60

      if (paymentTimer) {
        paymentTimer.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      }

      if (timeLeft <= 0) {
        clearInterval(timerInterval)
        alert("Payment session expired. Please try again.")
        closePaymentModal()
      }

      timeLeft--
    }, 1000)
  }

  // Confirm payment
  if (confirmPayment) {
    confirmPayment.addEventListener("click", () => {
      const selectedMethod = document.querySelector('input[name="payment-method"]:checked')

      if (selectedMethod) {
        const method = selectedMethod.value

        if (method === "qris") {
          // Simulate QRIS payment processing
          alert("Please scan the QR code with your banking app to complete the payment.")
          // In a real application, you would check payment status
          setTimeout(() => {
            alert("Payment successful! Thank you for your purchase.")
            closePaymentModal()
            // Redirect to success page or clear cart
          }, 3000)
        } else if (method === "gopay") {
          const phoneNumber = document.getElementById("phone-number").value
          if (phoneNumber) {
            alert(`Payment request sent to ${phoneNumber}. Please check your GoPay app.`)
            setTimeout(() => {
              alert("Payment successful! Thank you for your purchase.")
              closePaymentModal()
              // Redirect to success page or clear cart
            }, 2000)
          } else {
            alert("Please enter your phone number.")
          }
        }
      }
    })
  }

  // GoPay phone number validation
  const phoneInput = document.getElementById("phone-number")
  if (phoneInput) {
    phoneInput.addEventListener("input", function () {
      // Simple phone number formatting
      let value = this.value.replace(/\D/g, "")
      if (value.startsWith("62")) {
        value = "+" + value
      } else if (value.startsWith("0")) {
        value = "+62" + value.substring(1)
      } else if (value.length > 0) {
        value = "+62" + value
      }
      this.value = value
    })
  }
})
