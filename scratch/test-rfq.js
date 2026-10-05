async function testRfq() {
  const payload = {
    contactName: "Tendai Chisango",
    companyName: "Chiadzwa Mineral Processing Ltd",
    email: "t.chisango@chiadzwamining.co.zw",
    phone: "+263 772 123 456",
    deliveryCityOrRegion: "Mutare Depot",
    urgency: "urgent_breakdown",
    items: [
      {
        productId: "prod-r2at-hyd",
        productSlug: "sae-100-r2at-en-853-2sn-hydraulic-hose",
        productName: "SAE 100 R2AT Hydraulic Hose",
        categorySlug: "rubber-hoses",
        selectedVariantCode: "R2AT-08",
        sizeOrSpec: "1/2 inch (12.7mm ID)",
        quantity: "4",
        unit: "coils",
      },
    ],
    additionalNotes: "Require pressure test certificates for 275 bar.",
  };

  try {
    const res = await fetch("http://localhost:3000/api/rfq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    console.log("Status Code:", res.status);
    console.log("Response Body:", JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Test error:", err);
  }
}

testRfq();
