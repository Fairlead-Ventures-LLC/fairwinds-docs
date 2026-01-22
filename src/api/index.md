---
layout: base.html
title: API Reference
---

# API Reference

The FairWinds API allows you to integrate sailing data, weather information, and race details into your applications.

## Base URL

```
https://api.fairwinds.app/v1
```

## Authentication

All API requests require authentication using an API key:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.fairwinds.app/v1/races
```

### Getting an API Key

1. Log in to your FairWinds account
2. Navigate to Settings > API Keys
3. Click "Generate New Key"
4. Store your key securely - it won't be shown again

## Endpoints

### Races

#### List All Races

```http
GET /races
```

Returns a list of all available races.

**Response:**
```json
{
  "races": [
    {
      "id": "race-123",
      "name": "Transpacific Race 2026",
      "start_time": "2026-07-04T12:00:00Z",
      "status": "open"
    }
  ]
}
```

#### Get Race Details

```http
GET /races/:id
```

Returns detailed information about a specific race.

### Weather

#### Get Current Weather

```http
GET /weather?lat=37.8&lon=-122.4
```

Returns current weather conditions for a location.

**Parameters:**
- `lat` (required): Latitude
- `lon` (required): Longitude

**Response:**
```json
{
  "wind_speed": 12.5,
  "wind_direction": 270,
  "timestamp": "2026-01-22T14:00:00Z"
}
```

## Rate Limits

- Free tier: 100 requests per hour
- Pro tier: 1000 requests per hour
- Enterprise: Custom limits

## Support

For API support, please contact api-support@fairwinds.app or visit our [GitHub Issues](https://github.com/Fairlead-Ventures-LLC/fairwinds-docs/issues).
