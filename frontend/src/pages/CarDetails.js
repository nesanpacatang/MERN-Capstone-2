
export const CarDetails = () => {
  return (
    <div>
        <div className="bg-shade py-40">
            
            <div className="mx-auto md:w-11/12  rounded-lg bg-cyan-600 z-40 relative bottom-16 sm:bottom-10 px-2 lg:px-5 xl:px-5 py-5 mb-5" id="filter">
            <form action="">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-1 justify-center items-center">
                {/* Car specs */}
                <div className="flex justify-center items-center rounded-lg bg-white py-2 col-span-2 lg:col-span-1">
                    <div className="relative">
                    <select
                        className="rounded-lg pl-8 focus:ring-0 border-none"
                        id="location"
                        name="location"
                        placeholder="Pick-up Branch"
                    >
                        <option disabled value="">
                        Branch
                        </option>
                        <option value="Manila">Manila</option>
                        <option value="Pasay">Pasay</option>
                        <option value="Pasig">Pasig</option>
                        <option value="Makati">Makati</option>
                    </select>
                    <div className="absolute top-2 left-1">
                        <FaBuilding size="1.5rem" className="text-primary" />
                    </div>
                    </div>
                </div>

                {/* Pick-up Date */}
                <div className="flex justify-center items-center rounded-lg bg-white">
                    <div className="flex flex-col justify-center relative">
                    <label htmlFor="pickupDate" className="pt-2 text-sm font-bold">
                        Pickup Date:
                    </label>
                    <input
                        className="border-none rounded-lg focus:ring-0 p-0 pb-1"
                        type="date"
                        id="pickupDate"
                        name="pickupDate"
                    />
                    </div>
                </div>

                {/* Pick-up Time */}
                <div className="flex justify-center items-center rounded-lg bg-white">
                    <div className="flex flex-col justify-center">
                    <label htmlFor="pickupTime" className="pt-2 text-sm font-bold">
                        Time:
                    </label>
                    <input
                        className="border-none rounded-lg focus:ring-0 p-0 pb-1"
                        type="time"
                        id="pickupTime"
                        name="pickupTime"
                    />
                    </div>
                </div>

                {/* Return Date */}
                <div className="flex justify-center items-center rounded-lg bg-white">
                    <div className="flex flex-col justify-center">
                    <label htmlFor="returnDate" className="pt-2 text-sm font-bold">
                        Return Date:
                    </label>
                    <input
                        className="border-none rounded-lg focus:ring-0 p-0 pb-1"
                        type="date"
                        id="returnDate"
                        name="returnDate"
                    />
                    </div>
                </div>

                {/* Return Time */}
                <div className="flex justify-center items-center rounded-lg bg-white">
                    <div className="flex flex-col justify-center">
                    <label htmlFor="returnTime" className="pt-2 text-sm font-bold">
                        Time:
                    </label>
                    <input
                        className="border-none rounded-lg focus:ring-0 p-0 pb-1"
                        type="time"
                        id="returnTime"
                        name="returnTime"
                    />
                    </div>
                </div>
                </div>
            </form>
            </div>
            <div className="container __grid">
          <div className="bg-light px-8 rounded-2xl">
          <form action="">
            <div>
              <h2 className="text-primary text-2xl font-bold pb-5 pt-8">Driving Preference</h2>
              <p className="font-bold pb-3">Choose from the options below:</p>
            </div>

            <div>
            <div className="pl-5 pb-4">
              <input
                type="checkbox"
                id="selfDriveCheckbox"
                checked={selfDrive}
                onChange={handleSelfDriveChange}
                className='mr-5'
            
              />
              <label htmlFor="selfDriveCheckbox">
                Self Drive
              </label>
            </div>


              <div className="pl-5 pb-4">
                  <input
                    type="checkbox"
                    id='hireDriverCheckbox'
                    checked={hireDriver}
                    onChange={handleHireDriverChange}
                    className='mr-5'
                  />
                <label htmlFor='hireDriverCheckbox'>
                Hire a Driver
                </label>
              </div>
            </div>

            {hireDriver && (
              <div>
                <h2 className="text-primary text-2xl pb-4 font-bold">Information</h2>
                <h3 className="font-bold text-2xl pb-4">Main Driver</h3>
                <div className="px-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={firstName}
                      onChange={handleFirstNameChange}
                      className="border rounded-lg p-2 w-full"
                    />
                    {formErrors.firstName && (
                    <p className="text-red-500">{formErrors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="middleName">Middle Name:</label>
                    <input
                      type="text"
                      id="middleName"
                      name="middleName"
                      value={middleName}
                      onChange={handleMiddleNameChange}
                      className="border rounded-lg p-2 w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={lastName}
                      onChange={handleLastNameChange}
                      className="border rounded-lg p-2 w-full"
                    />
                     {formErrors.lastName && (
                    <p className="text-red-500">{formErrors.lastName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="suffix">Suffix:</label>
                    <input
                      type="text"
                      id="suffix"
                      name="suffix"
                      value={suffix}
                      onChange={handleSuffixChange}
                      className="border rounded-lg p-2 w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="birthdate">Birthdate:</label>
                    <input
                      type="date"
                      id="birthdate"
                      name="birthdate"
                      value={birthdate}
                      onChange={handleBirthdateChange}
                      className="border rounded-lg p-2 w-full"
                    />
                    {formErrors.birthdate && (
                    <p className="text-red-500">{formErrors.birthdate}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="age">Age:</label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={age}
                      onChange={handleAgeChange}
                      className="border rounded-lg p-2 w-full"
                    />
                    {formErrors.age && (
                    <p className="text-red-500">{formErrors.age}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="nationality">Nationality:</label>
                    <input
                      type="text"
                      id="nationality"
                      name="nationality"
                      value={nationality}
                      onChange={handleNationalityChange}
                      className="border rounded-lg p-2 w-full"
                    />
                    {formErrors.nationality && (
                    <p className="text-red-500">{formErrors.nationality}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      className="border rounded-lg p-2 w-full"
                    />
                    {formErrors.phoneNumber && (
                    <p className="text-red-500">{formErrors.phoneNumber}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                      className="border rounded-lg p-2 w-full"
                    />
                    {formErrors.email && (
                    <p className="text-red-500">{formErrors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="driverLicenseNumber">Driver License Number:</label>
                    <input
                      type="text"
                      id="driverLicenseNumber"
                      name="driverLicenseNumber"
                      value={driverLicenseNumber}
                      onChange={handleDriverLicenseNumberChange}
                      className="border rounded-lg p-2 w-full"
                    />
                    {formErrors.driverLicenseNumber && (
                    <p className="text-red-500">{formErrors.driverLicenseNumber}</p>
                    )}
                  </div>
                </div>
                

                
      {/* Your JSX code */}
      <div className="pb-10">
        {/* Start Upload File */}
        <div>
          <h2 className="pt-5 font-bold text-lg">Upload Driver's License ID Photo</h2>
        </div>
        <div
          className="border border-primary"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="flex flex-col justify-center items-center">
            {licenseIdPhoto ? (
              <img
                src={URL.createObjectURL(licenseIdPhoto)}
                alt="License ID"
                className="h-20 w-20 mt-3 mb-2"
              />
            ) : (
              <img src={Upload} alt="Upload" className="h-20 w-20" />
            )}
            <p>{licenseIdPhoto ? 'File Uploaded' : 'Upload a File'}</p>
            <p>Drag and drop files here</p>
            <input type="file" accept="image/*" onChange={handleFileUpload} className='my-5' />
          </div>
        </div>
      </div>
      {/* End Upload File */}
    </div>
              
            )}

           
          </form>
          </div>

          <div className='border border-card bg-light h-max rounded-2xl'>  
            <h2 className='text-primary text-xl px-12 pt-2 pb-4 font-bold text-center'>Price Breakdown</h2>
            <form action="">
              <div className='px-3'> 
                <h2 className='font-bold'>Booking Duration</h2>
                  <hr className='border-t-2 border-black pb-1' />
                  <div className='flex justify-between'>
                    <p>Pick-up:</p>
                    <p>June 28, 2023  </p>
                  </div>
                  <div className='flex justify-between'>
                    <p>Drop-Off:</p>
                    <p>June 30, 2023</p>
                  </div>
                  <div className='flex justify-between'>
                    <p>Total Days:</p>
                    <p>2 Days</p>
                  </div>
                  <div className='flex justify-between'>
                    <p className='font-bold pb-5'>Subtotal:</p>
                    <p>Php 40,000</p>
                  </div>

                  <h2 className='font-bold'>Other Fees</h2>
                  <hr className='border-t-2 border-black pb-1' />
                  <div className='flex justify-between'>
                    <p>Drop-Off Fee:</p>
                    <p>Php 500</p>
                  </div>
                  <h2>Add-Ons:</h2>
                  <div className='flex justify-between'>
                    <p className='pl-3 pb-7'>Cargo Protect</p>
                    <p>Php 5,000</p>
                  </div>
                  <div className='flex justify-between pb-5'>
                    <p className='font-bold text-2xl'>Total:</p>
                    <p className='text-xl'>Php 45,500</p>
                  </div>
                  <div className='text-center pb-4'>
                    <NavLink to="/finaldetails"> <button className='py-1 px-10 bg-button text-white rounded-lg'
                    onClick={handleSubmit}>
                      Continue
                    </button>
                    </NavLink>
                  </div>
              </div>  
            </form>
            
          </div>
            </div>
        </div>
    </div>
  )
}
