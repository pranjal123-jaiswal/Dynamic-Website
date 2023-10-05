const Razorpay1 = (event) => {
  var options = {
    key: "rzp_test_zonUGKKEMdtrEx", // Enter the Key ID generated from the Dashboard
    amount: event.amountToBePaid * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: event.title,
    description: "Test for Integration",
    image: "",
    handler: function (response) {
      // alert(response.razorpay_payment_id);
      // alert(response.razorpay_order_id);
      // alert(response.razorpay_signature)
    },
    // prefill: {
    //   name: "Manoj Kushwah",
    //   email: "gaurav.kumar@example.com",
    //   contact: "9999999999",
    // },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#3399cc",
    },
  };
  var rzp1 = new window.Razorpay(options);
  rzp1.on("payment.failed", function (response) {
    // alert(response.error.code);
    // alert(response.error.description);
    // alert(response.error.source);
    // alert(response.error.step);
    // alert(response.error.reason);
    // alert(response.error.metadata.order_id);
    // alert(response.error.metadata.payment_id);
  });
  rzp1.open();
};
export default Razorpay1;
