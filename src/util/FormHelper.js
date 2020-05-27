export const editPofileData = profileData => {
  return {
    firstName: profileData.profile.firstName || '',
    middleName: profileData.profile.middleName || '',
    lastName: profileData.profile.lastName || '',
    gender: profileData.profile.gender || '',
    address: profileData.profile.address || '',
    city: profileData.profile.city || '',
    state: profileData.profile.state || '',
    country: profileData.profile.country.toLowerCase() || '',
    postalCode: profileData.profile.postalCode || '',
    kycStatus: profileData.profile.kycStatus || '',
    date: profileData.profile.date || '',
  };
};

export const initialProfileData = () => {
  return {
    firstName: '',
    middleName: '',
    lastName: '',
    gender: 'male',
    address: '',
    city: '',
    state: '',
    country: 'india',
    postalCode: '',
    kycStatus: 'Yellow',
    date: new Date(),
  };
};

export const editKYCData = kycData => {
  if (!kycData.kyc) {
    return initialKYCData();
  }
  return {
    identificationNumber: kycData.kyc.identificationNumber,
    country: kycData.kyc.country,
    identificationType: kycData.kyc.identificationType,
    occupationType: kycData.kyc.occupationType,
    designation: kycData.kyc.designation,
    salary: kycData.kyc.salary,
  };
};

export const initialKYCData = () => {
  return {
    identificationNumber: '',
    country: 'india',
    identificationType: 'passport',
    occupationType: 'fullTime',
    designation: '',
    salary: '',
  };
};
