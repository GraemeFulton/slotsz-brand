<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Pulsz Online Casino Liquid

A React-based casino website clone with server-side Basic Authentication.

## 🔐 Authentication

This project is protected with HTTP Basic Authentication:

- **Username**: `admin`
- **Password**: `Petugem-14`

## 🚀 Getting Started

### Development

```bash
npm install
npm run dev
```

### Production

```bash
npm install
npm run build
npm start
```

The production server will run on port 3000 with Basic Auth enabled.

## 🔧 Environment Variables

Create a `.env.local` file with:

```bash
BASIC_AUTH_USER=admin
BASIC_AUTH_PASS=Petugem-14
```

## 🌐 Access

- **Development**: http://localhost:5173/ (no auth required)
- **Production**: http://localhost:3000/ (Basic Auth required)

## 📝 Notes

- The production server uses Express with Basic Auth middleware
- All routes are protected with HTTP Basic Authentication
- Credentials are stored in environment variables for security
