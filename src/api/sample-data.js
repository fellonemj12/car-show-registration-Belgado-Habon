// src/api/sample-data.js

const sampleRegistrations = [
  {
    id: "3f2c9a1e-1234-5678-abcd-111111111111",
    registrationNumber: "CS27-0001",
    registrationDate: "2027-02-10T08:30:00Z",
    participantName: "Juan Dela Cruz",
    contactNumber: "09171234567",
    email: "juan@example.com",
    address: "123 Rizal St., Naga City",
    carMakeModel: "Toyota Supra MK4",
    plateNumber: "ABC 1234",
    registrationType: "Competitor",
    status: "Confirmed",
    registrationFee: 2500.00,
    amountPaid: 1000.00,
    paymentStatus: "Partial"
  },
  {
    id: "3f2c9a1e-1234-5678-abcd-222222222222",
    registrationNumber: "CS27-0002",
    registrationDate: "2027-02-10T09:15:00Z",
    participantName: "Maria Santos",
    contactNumber: "09182345678",
    email: "maria@example.com",
    address: "456 Maharlika Hwy, Sorsogon City",
    carMakeModel: "Nissan GT-R R35",
    plateNumber: "XYZ 5678",
    registrationType: "Exhibitor",
    status: "CheckedIn",
    registrationFee: 3000.00,
    amountPaid: 3000.00,
    paymentStatus: "Paid"
  },
  {
    id: "3f2c9a1e-1234-5678-abcd-333333333333",
    registrationNumber: "CS27-0003",
    registrationDate: "2027-02-11T10:00:00Z",
    participantName: "Pedro Penduko",
    contactNumber: "09193456789",
    email: "pedro@example.com",
    address: "789 Quezon Ave, Gubat, Sorsogon",
    carMakeModel: "Mazda RX-7 FD",
    plateNumber: "DAT 9999",
    registrationType: "VIP",
    status: "Pending",
    registrationFee: 5000.00,
    amountPaid: 0.00,
    paymentStatus: "Unpaid"
  },
  {
    id: "3f2c9a1e-1234-5678-abcd-444444444444",
    registrationNumber: "CS27-0004",
    registrationDate: "2027-02-11T11:20:00Z",
    participantName: "Clara Reyes",
    contactNumber: "09204567890",
    email: "clara@example.com",
    address: "12 P. Diaz St., Bulan, Sorsogon",
    carMakeModel: "Honda Civic EG6",
    plateNumber: "HON 888",
    registrationType: "Competitor",
    status: "Confirmed",
    registrationFee: 2500.00,
    amountPaid: 2500.00,
    paymentStatus: "Paid"
  },
  {
    id: "3f2c9a1e-1234-5678-abcd-555555555555",
    registrationNumber: "CS27-0005",
    registrationDate: "2027-02-12T13:00:00Z",
    participantName: "Jose Rizal",
    contactNumber: "09215678901",
    email: "jose@example.com",
    address: "Calamba, Laguna",
    carMakeModel: "Mitsubishi Lancer Evolution IX",
    plateNumber: "REV 1861",
    registrationType: "Exhibitor",
    status: "Cancelled",
    registrationFee: 3000.00,
    amountPaid: 0.00,
    paymentStatus: "Unpaid"
  },
  {
    id: "3f2c9a1e-1234-5678-abcd-666666666666",
    registrationNumber: "CS27-0006",
    registrationDate: "2027-02-12T14:10:00Z",
    participantName: "Andres Bonifacio",
    contactNumber: "09226789012",
    email: "andres@example.com",
    address: "Tondo, Manila",
    carMakeModel: "Subaru Impreza WRX STI",
    plateNumber: "KTF 1896",
    registrationType: "Competitor",
    status: "CheckedIn",
    registrationFee: 2500.00,
    amountPaid: 2500.00,
    paymentStatus: "Paid"
  },
  {
    id: "3f2c9a1e-1234-5678-abcd-777777777777",
    registrationNumber: "CS27-0007",
    registrationDate: "2027-02-13T09:00:00Z",
    participantName: "Emilio Aguinaldo",
    contactNumber: "09237890123",
    email: "emilio@example.com",
    address: "Kawit, Cavite",
    carMakeModel: "Ford Mustang Shelby GT500",
    plateNumber: "CAV 1898",
    registrationType: "VIP",
    status: "Confirmed",
    registrationFee: 5000.00,
    amountPaid: 2500.00,
    paymentStatus: "Partial"
  },
  {
    id: "3f2c9a1e-1234-5678-abcd-888888888888",
    registrationNumber: "CS27-0008",
    registrationDate: "2027-02-13T10:30:00Z",
    participantName: "Apolinario Mabini",
    contactNumber: "09248901234",
    email: "apolinario@example.com",
    address: "Tanauan, Batangas",
    carMakeModel: "Toyota GR Yaris",
    plateNumber: "SUB 1010",
    registrationType: "Competitor",
    status: "Pending",
    registrationFee: 2500.00,
    amountPaid: 0.00,
    paymentStatus: "Unpaid"
  },
  {
    id: "3f2c9a1e-1234-5678-abcd-999999999999",
    registrationNumber: "CS27-0009",
    registrationDate: "2027-02-14T11:00:00Z",
    participantName: "Gabriela Silang",
    contactNumber: "09259012345",
    email: "gabriela@example.com",
    address: "Ilocos Sur",
    carMakeModel: "Honda Civic Type R FL5",
    plateNumber: "ILC 1763",
    registrationType: "Exhibitor",
    status: "CheckedIn",
    registrationFee: 3000.00,
    amountPaid: 3000.00,
    paymentStatus: "Paid"
  },
  {
    id: "3f2c9a1e-1234-5678-abcd-000000000001",
    registrationNumber: "CS27-0010",
    registrationDate: "2027-02-14T15:45:00Z",
    participantName: "Antonio Luna",
    contactNumber: "09260123456",
    email: "antonio@example.com",
    address: "Badoc, Ilocos Norte",
    carMakeModel: "Dodge Charger R/T",
    plateNumber: "GEN 1899",
    registrationType: "VIP",
    status: "Confirmed",
    registrationFee: 5000.00,
    amountPaid: 5000.00,
    paymentStatus: "Paid"
  },
  {
    id: "3f2c9a1e-1234-5678-abcd-000000000002",
    registrationNumber: "CS27-0011",
    registrationDate: "2027-02-15T08:00:00Z",
    participantName: "Melchora Aquino",
    contactNumber: "09271234567",
    email: "tandangsora@example.com",
    address: "Quezon City",
    carMakeModel: "Toyota Land Cruiser Prado",
    plateNumber: "TND 0001",
    registrationType: "Exhibitor",
    status: "Confirmed",
    registrationFee: 3000.00,
    amountPaid: 1500.00,
    paymentStatus: "Partial"
  },
  {
    id: "3f2c9a1e-1234-5678-abcd-000000000003",
    registrationNumber: "CS27-0012",
    registrationDate: "2027-02-15T09:30:00Z",
    participantName: "Gregoria de Jesus",
    contactNumber: "09282345678",
    email: "oriang@example.com",
    address: "Caloocan City",
    carMakeModel: "Mini Cooper S",
    plateNumber: "ORI 8888",
    registrationType: "Competitor",
    status: "Pending",
    registrationFee: 2500.00,
    amountPaid: 0.00,
    paymentStatus: "Unpaid"
  },
  {
    id: "3f2c9a1e-1234-5678-abcd-000000000004",
    registrationNumber: "CS27-0013",
    registrationDate: "2027-02-15T10:15:00Z",
    participantName: "Diego Silang",
    contactNumber: "09293456789",
    email: "diego@example.com",
    address: "Tayum, Abra",
    carMakeModel: "Nissan Navara Pro-4X",
    plateNumber: "ABR 1762",
    registrationType: "Competitor",
    status: "CheckedIn",
    registrationFee: 2500.00,
    amountPaid: 2500.00,
    paymentStatus: "Paid"
  },
  {
    id: "3f2c9a1e-1234-5678-abcd-000000000005",
    registrationNumber: "CS27-0014",
    registrationDate: "2027-02-16T13:20:00Z",
    participantName: "Marcelo H. del Pilar",
    contactNumber: "09304567890",
    email: "plaridel@example.com",
    address: "Bulakan, Bulacan",
    carMakeModel: "Hyundai Genesis Coupe",
    plateNumber: "PLR 1850",
    registrationType: "Exhibitor",
    status: "Confirmed",
    registrationFee: 3000.00,
    amountPaid: 3000.00,
    paymentStatus: "Paid"
  },
  {
    id: "3f2c9a1e-1234-5678-abcd-000000000006",
    registrationNumber: "CS27-0015",
    registrationDate: "2027-02-16T14:00:00Z",
    participantName: "Graciano Lopez Jaena",
    contactNumber: "09315678901",
    email: "graciano@example.com",
    address: "Jaro, Iloilo City",
    carMakeModel: "BMW M3 E46",
    plateNumber: "ILO 1856",
    registrationType: "VIP",
    status: "Pending",
    registrationFee: 5000.00,
    amountPaid: 0.00,
    paymentStatus: "Unpaid"
  },
  {
    id: "3f2c9a1e-1234-5678-abcd-000000000007",
    registrationNumber: "CS27-0016",
    registrationDate: "2027-02-17T09:10:00Z",
    participantName: "Juan Luna",
    contactNumber: "09326789012",
    email: "juanluna@example.com",
    address: "Badoc, Ilocos Norte",
    carMakeModel: "Porsche 911 GT3 RS",
    plateNumber: "ART 1857",
    registrationType: "VIP",
    status: "CheckedIn",
    registrationFee: 5000.00,
    amountPaid: 5000.00,
    paymentStatus: "Paid"
  },
  {
    id: "3f2c9a1e-1234-5678-abcd-000000000008",
    registrationNumber: "CS27-0017",
    registrationDate: "2027-02-17T10:40:00Z",
    participantName: "Pintor Makabayan",
    contactNumber: "09337890123",
    email: "pintor@example.com",
    address: "Legazpi City, Albay",
    carMakeModel: "Lexus LFA",
    plateNumber: "ALB 4500",
    registrationType: "Exhibitor",
    status: "Confirmed",
    registrationFee: 3000.00,
    amountPaid: 1500.00,
    paymentStatus: "Partial"
  },
  {
    id: "3f2c9a1e-1234-5678-abcd-000000000009",
    registrationNumber: "CS27-0018",
    registrationDate: "2027-02-18T11:00:00Z",
    participantName: "Sorsogon Car Club",
    contactNumber: "09348901234",
    email: "sorsogoncarclub@example.com",
    address: "Sorsogon City",
    carMakeModel: "Toyota Corolla AE86",
    plateNumber: "SOR 2027",
    registrationType: "Exhibitor",
    status: "Confirmed",
    registrationFee: 3000.00,
    amountPaid: 3000.00,
    paymentStatus: "Paid"
  },
  {
    id: "3f2c9a1e-1234-5678-abcd-000000000010",
    registrationNumber: "CS27-0019",
    registrationDate: "2027-02-18T14:15:00Z",
    participantName: "Bicol Drifters",
    contactNumber: "09359012345",
    email: "bicoldrifters@example.com",
    address: "Legazpi City",
    carMakeModel: "Nissan Silvia S15",
    plateNumber: "DRF 3333",
    registrationType: "Competitor",
    status: "CheckedIn",
    registrationFee: 2500.00,
    amountPaid: 2500.00,
    paymentStatus: "Paid"
  },
  {
    id: "3f2c9a1e-1234-5678-abcd-000000000011",
    registrationNumber: "CS27-0020",
    registrationDate: "2027-02-19T09:00:00Z",
    participantName: "Gubat Speed Enthusiasts",
    contactNumber: "09360123456",
    email: "gubatspeed@example.com",
    address: "Gubat, Sorsogon",
    carMakeModel: "Honda Civic FK8",
    plateNumber: "GBT 0709",
    registrationType: "Competitor",
    status: "Pending",
    registrationFee: 2500.00,
    amountPaid: 0.00,
    paymentStatus: "Unpaid"
  },
  {
    id: "3f2c9a1e-1234-5678-abcd-000000000012",
    registrationNumber: "CS27-0021",
    registrationDate: "2027-02-19T10:20:00Z",
    participantName: "Rizal Vangard",
    contactNumber: "09371234567",
    email: "vangard@example.com",
    address: "Antipolo City",
    carMakeModel: "Ford Raptor",
    plateNumber: "ANT 7777",
    registrationType: "VIP",
    status: "Confirmed",
    registrationFee: 5000.00,
    amountPaid: 5000.00,
    paymentStatus: "Paid"
  },
  {
    id: "3f2c9a1e-1234-5678-abcd-000000000013",
    registrationNumber: "CS27-0022",
    registrationDate: "2027-02-20T11:45:00Z",
    participantName: "Mayon Turbo Club",
    contactNumber: "09382345678",
    email: "mayonturbo@example.com",
    address: "Daraga, Albay",
    carMakeModel: "Subaru BRZ",
    plateNumber: "MYN 2468",
    registrationType: "Competitor",
    status: "Confirmed",
    registrationFee: 2500.00,
    amountPaid: 1000.00,
    paymentStatus: "Partial"
  },
  {
    id: "3f2c9a1e-1234-5678-abcd-000000000014",
    registrationNumber: "CS27-0023",
    registrationDate: "2027-02-20T13:10:00Z",
    participantName: "Bulusan Lake Cruisers",
    contactNumber: "09393456789",
    email: "bulusanlake@example.com",
    address: "Bulusan, Sorsogon",
    carMakeModel: "Suzuki Jimny",
    plateNumber: "BLS 5555",
    registrationType: "Exhibitor",
    status: "Pending",
    registrationFee: 3000.00,
    amountPaid: 0.00,
    paymentStatus: "Unpaid"
  },
  {
    id: "3f2c9a1e-1234-5678-abcd-000000000015",
    registrationNumber: "CS27-0024",
    registrationDate: "2027-02-21T15:00:00Z",
    participantName: "Matnog Seafarers Garage",
    contactNumber: "09404567890",
    email: "matnoggarage@example.com",
    address: "Matnog, Sorsogon",
    carMakeModel: "Isuzu D-Max Boondock",
    plateNumber: "MTN 4321",
    registrationType: "Exhibitor",
    status: "CheckedIn",
    registrationFee: 3000.00,
    amountPaid: 3000.00,
    paymentStatus: "Paid"
  },
  {
    id: "3f2c9a1e-1234-5678-abcd-000000000016",
    registrationNumber: "CS27-0025",
    registrationDate: "2027-02-22T09:30:00Z",
    participantName: "Ticao Island Motors",
    contactNumber: "09415678901",
    email: "ticaomotors@example.com",
    address: "Masbate City",
    carMakeModel: "Mitsubishi Montero Sport",
    plateNumber: "MSB 9911",
    registrationType: "VIP",
    status: "Cancelled",
    registrationFee: 5000.00,
    amountPaid: 0.00,
    paymentStatus: "Unpaid"
  }
];

export async function getRegistrations(params = {}) {
  let filtered = [...sampleRegistrations];

  // Filter by participantName
  if (params.participantName) {
    const query = params.participantName.toLowerCase();
    filtered = filtered.filter(item => 
      item.participantName.toLowerCase().includes(query) ||
      item.carMakeModel.toLowerCase().includes(query) ||
      item.plateNumber.toLowerCase().includes(query)
    );
  }

  // Filter by type
  if (params.type && params.type !== "All") {
    filtered = filtered.filter(item => item.registrationType === params.type);
  }

  // Filter by status
  if (params.status && params.status !== "All") {
    filtered = filtered.filter(item => item.status === params.status);
  }

  const page = parseInt(params.page) || 1;
  const pageSize = parseInt(params.pageSize) || 10;
  const totalCount = filtered.length;
  const totalPages = Math.ceil(totalCount / pageSize) || 1;

  const startIndex = (page - 1) * pageSize;
  const items = filtered.slice(startIndex, startIndex + pageSize);

  // Simulate small network delay for realistic feel
  await new Promise(resolve => setTimeout(resolve, 200));

  return {
    items,
    page,
    pageSize,
    totalCount,
    totalPages
  };
}

export async function getSummary() {
  const totalRegistrations = sampleRegistrations.length;
  const confirmed = sampleRegistrations.filter(i => i.status === "Confirmed").length;
  const checkedIn = sampleRegistrations.filter(i => i.status === "CheckedIn").length;
  const pending = sampleRegistrations.filter(i => i.status === "Pending").length;
  const cancelled = sampleRegistrations.filter(i => i.status === "Cancelled").length;

  const totalFees = sampleRegistrations.reduce((sum, i) => sum + i.registrationFee, 0);
  const totalPayments = sampleRegistrations.reduce((sum, i) => sum + i.amountPaid, 0);
  const uncollectedPayments = totalFees - totalPayments;

  await new Promise(resolve => setTimeout(resolve, 150));

  return {
    totalRegistrations,
    confirmed,
    checkedIn,
    pending,
    cancelled,
    totalFees,
    totalPayments,
    uncollectedPayments
  };
}