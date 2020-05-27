import React from 'react';
import { useState } from 'react';

const DataContext = React.createContext();
let masterData = [
  {
    customerID: '100001',
    profile: {
      firstName: 'Raja1',
      lastName: 'Gattu',
      middleName: '',
      address: 'No.14, Ground Floor',
      gender: 'male',
      city: 'Bengaluru',
      state: 'Karnataka',
      country: 'India',
      kycStatus: 'Yellow',
      postalCode: '560078',
      date: '05-21-1989',
    },
    kyc: {
      identificationNumber: '111-111-1111',
      country: 'india',
      identificationType: 'ssn',
      occupationType: 'fullTime',
      designation: '',
      salary: '',
    },
  },
  {
    customerID: '100002',
    profile: {
      firstName: 'Raja2',
      lastName: 'Gattu',
      middleName: '',
      gender: 'male',
      address: 'No.14, Ground Floor',
      city: 'Bengaluru',
      state: 'Karnataka',
      country: 'India',
      kycStatus: 'Yellow',
      postalCode: '560078',
      date: '05-21-1989',
    },
    kyc: {
      identificationNumber: '222-222-2222',
      country: 'india',
      identificationType: 'ssn',
      occupationType: 'fullTime',
      designation: '',
      salary: '',
    },
  },
];

function editProfileData(editData, id) {
  const editProfile = masterData.find(row => {
    return row.customerID === id;
  });
  const updateEdit = {
    ...editProfile,
    profile: { ...editData },
  };

  const editIndex = masterData.findIndex(row => {
    return row.customerID === id;
  });
  masterData[editIndex] = updateEdit;
}
function editKycData(editData, id) {
  // console.log('editData', editData, id);

  const editKYC = masterData.find(row => {
    return row.customerID === id;
  });

  console.log('editKYC', editKYC);
  // console.log('kycStatusCheck', kycStatusCheck(editData));
  const updateEdit = {
    ...editKYC,
    profile: { ...editKYC.profile, kycStatus: kycStatusCheck(editData) },
    kyc: { ...editData },
  };

  const editIndex = masterData.findIndex(row => {
    return row.customerID === id;
  });
  // console.log('editIndex', editIndex);
  masterData[editIndex] = updateEdit;
  // console.log('masterData', masterData);
}

function kycStatusCheck(kyc) {
  return kyc.identificationNumber &&
    // kyc.country &&
    kyc.identificationType &&
    kyc.occupationType &&
    kyc.designation &&
    kyc.salary
    ? 'Green'
    : 'Yellow';
}

// function editProfileData(editData) {
//   const editProfile = masterData.find(row => {
//     return row.customerID === editData.customerID;
//   });
//   const updateEdit = {
//     ...editProfile,
//     edit: {
//       customerID: editData.customerID,
//       profile: { ...editData.profile },
//       kyc: { ...editData.kyc },
//     },
//   };
//   const editIndex = masterData.findIndex(row => {
//     return row.customerID === editData.customerID;
//   });
//   masterData[editIndex] = updateEdit;
//   console.log(masterData);
// }

function addProfileData(newProfile) {
  if (!newProfile) {
    return;
  }
  // const len = '10000' + (masterData.length + 1);
  // masterData = [{ customerID: len, profile: { ...newProfile } }, ...masterData];
  // const len = '10000' + (masterData.length + 1);
  masterData = [...masterData, { ...newProfile }];
}

function DataProvider(props) {
  const [rows, setRows] = useState([...masterData]);
  const getFilterData = (searchValue = '') => {
    if (searchValue === '') {
      setRows(masterData);
      return;
    }
    setRows(
      masterData.filter(row => {
        return row.customerID === searchValue;
      })
    );
  };

  return (
    <DataContext.Provider
      value={{
        rows,
        getFilterData,
        addProfileData,
        editProfileData,
        editKycData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export { DataProvider, DataContext };
