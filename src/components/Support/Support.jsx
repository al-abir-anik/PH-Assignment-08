const Support = () => {
  return (
    <main>
      <div className="w-full h-fit pt-6 pb-10 bg-[#9538e2] text-center space-y-4">
        <h2 className="font-bold text-3xl text-white">Customer Support</h2>
        <p className="font-normal text-base text-white">
          Reach out to us through our
          contact methods or submit a support ticket for personalized
          assistance.
        </p>
      </div>

      {/* FROM CHATGPT */}
      <div className="container mx-auto p-6 my-5">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">How can we help you?</h2>
          <p>
            If you have any questions or need assistance, feel free to reach out
            to us through one of the following methods:
          </p>
        </div>

        <div className="space-y-6">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p>If you need help, you can contact our support team at:</p>
            <ul className="list-disc ml-6">
              <li>Email: support@yourwebsite.com</li>
              <li>Phone: +123 456 7890</li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div>
            <h3 className="text-xl font-semibold">
              Frequently Asked Questions
            </h3>
            <ul className="space-y-4">
              <li>
                <strong>How do I place an order?</strong> - To place an order,
                simply browse through our products, add your desired items to
                the cart, and proceed to checkout.
              </li>
              <li>
                <strong>How can I track my order?</strong> - Once your order is
                shipped, you will receive a tracking number via email.
              </li>
              <li>
                <strong>What payment methods do you accept?</strong> - We accept
                credit cards, debit cards, and PayPal.
              </li>
            </ul>
          </div>

          {/* Support Form */}
          <div>
            <h3 className="text-xl font-semibold">Submit a Ticket</h3>
            <p>
              If you have any issues or need assistance, please submit a support
              ticket below:
            </p>
            <form className="space-y-4">
              <div>
                <label className="block font-semibold" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block font-semibold" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block font-semibold" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-[#9538e2] text-white rounded-md hover:bg-blue-600"
              >
                Submit Ticket
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Support;
