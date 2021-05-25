# Auth

This is a project to build Phone Auth  
Deployed at <https://auth-xerosanyam.vercel.app/>

## Getting Started

First, run the development server:

```bash
npm run dev
npm run server
```

## Todos

[x] generate 6 digit otp  
[] otp valid for 60 seconds
[x] validate otp
[] send sms/phone-call  

[x] form accepts mobile number  
[] validate mobile number format
[x] option to send new otp
[] add styles
[] offer choice b/w sms/phone

### Todos Additional

[] use ip address, other info to generate requestId, verifyOTP with this id instead of mobile number

## APIs

1. POST `/postMobileNumber`

```
{
    "mobileNumber":123
}
```

2. POST `/verifyOTP`

```
{
    "mobileNumber":123,
    "OTP": "02915"
}
```
