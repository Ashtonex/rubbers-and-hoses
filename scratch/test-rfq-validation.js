async function testValidation() {
  // Test 1: Invalid email and missing company name
  const invalidPayload = {
    contactName: "A",
    companyName: "",
    email: "not-an-email",
    phone: "123",
    deliveryCityOrRegion: "",
    urgency: "standard_quote",
    items: [],
  };

  const res1 = await fetch("http://localhost:3000/api/rfq", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(invalidPayload),
  });
  const data1 = await res1.json();
  console.log("Validation Failure Test Status:", res1.status, "Details:", Object.keys(data1.details || {}));

  // Test 2: Honeypot bot trap
  const botPayload = {
    contactName: "Bot Spammer",
    companyName: "SEO Bots Ltd",
    email: "bot@spam.com",
    phone: "+263 772 000 000",
    deliveryCityOrRegion: "Harare",
    urgency: "standard_quote",
    items: [
      {
        productId: "prod-r2at-hyd",
        productSlug: "sae-100-r2at-en-853-2sn-hydraulic-hose",
        productName: "SAE 100 R2AT",
        categorySlug: "rubber-hoses",
        quantity: "1",
        unit: "unit",
      },
    ],
    honeypot: "http://spam-link.ru", // Bot fell into honeypot trap
  };

  const res2 = await fetch("http://localhost:3000/api/rfq", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(botPayload),
  });
  const data2 = await res2.json();
  console.log("Honeypot Bot Test Reference:", data2.reference);
}

testValidation();
