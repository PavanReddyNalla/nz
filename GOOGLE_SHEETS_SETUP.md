# Google Sheets Integration Setup

Follow these steps to connect your form to Google Sheets:

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "NZ Specialist Leads" (or any name you prefer)
4. Create column headers in the first row:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Phone`
   - D1: `Email`
   - E1: `Travel Type`

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Append data to sheet
    NZ Specialist Leads.appendRow([
      data.timestamp,
      data.name,
      data.phone,
      data.email,
      data.Travel Destination
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (💾 icon)
5. Name your project (e.g., "Form to Sheets")

## Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description**: "Form submission handler"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. **Copy the Web App URL** (it looks like: `https://script.google.com/macros/s/...../exec`)

## Step 4: Update Your Form

1. Open `src/components/InquiryForm.tsx`
2. Find this line:
   ```typescript
   const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your Web App URL
4. Save the file

## Step 5: Test

1. Fill out the form on your website
2. Submit it
3. Check your Google Sheet - the data should appear in a new row!

## Troubleshooting

- **Form doesn't submit**: Check that you copied the full Web App URL ending in `/exec`
- **Data not appearing**: Make sure you deployed as "Anyone" for access
- **Need to update the script**: Make changes, save, then create a **New deployment** (not update existing)

## Optional: Email Notifications

Add this to your Apps Script to get email notifications:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Append data to sheet
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.phone,
      data.email,
      data.travelType
    ]);
    
    // Send email notification
    MailApp.sendEmail({
      to: "your-email@example.com", // Change this to your email
      subject: "New Lead: " + data.name + " - " + data.travelType,
      body: "New lead received!\n\n" +
            "Name: " + data.name + "\n" +
            "Phone: " + data.phone + "\n" +
            "Email: " + data.email + "\n" +
            "Travel Type: " + data.travelType + "\n" +
            "Time: " + data.timestamp
    });
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```
