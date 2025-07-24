# EmailJS Template - Upgraded Beautiful Design

## HTML Template for EmailJS

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Message</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 300;
            letter-spacing: 1px;
        }
        .header .icon {
            font-size: 48px;
            margin-bottom: 15px;
            display: block;
        }
        .content {
            padding: 40px 30px;
        }
        .field {
            margin-bottom: 25px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 10px;
            border-left: 4px solid #667eea;
        }
        .field-label {
            font-weight: 600;
            color: #667eea;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
        }
        .field-value {
            font-size: 16px;
            color: #333;
            word-wrap: break-word;
        }
        .message-field {
            background: #fff3cd;
            border-left-color: #ffc107;
        }
        .message-field .field-label {
            color: #856404;
        }
        .footer {
            background: #f8f9fa;
            padding: 20px 30px;
            text-align: center;
            border-top: 1px solid #e9ecef;
        }
        .footer p {
            margin: 0;
            color: #6c757d;
            font-size: 14px;
        }
        .timestamp {
            background: #e9ecef;
            padding: 15px;
            border-radius: 8px;
            margin-top: 20px;
            text-align: center;
        }
        .timestamp p {
            margin: 0;
            color: #6c757d;
            font-size: 12px;
        }
        @media (max-width: 600px) {
            .container {
                margin: 10px;
                border-radius: 10px;
            }
            .header, .content {
                padding: 20px;
            }
            .field {
                padding: 15px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <span class="icon">📧</span>
            <h1>New Contact Message</h1>
            <p>You have received a new message from your portfolio website</p>
        </div>
        
        <div class="content">
            <div class="field">
                <div class="field-label">👤 Name</div>
                <div class="field-value">{{from_name}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">📧 Email Address</div>
                <div class="field-value">{{from_email}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">📝 Subject</div>
                <div class="field-value">{{subject}}</div>
            </div>
            
            <div class="field message-field">
                <div class="field-label">💬 Message</div>
                <div class="field-value">{{message}}</div>
            </div>
            
            <div class="timestamp">
                <p>📅 Message received on {{timestamp}}</p>
            </div>
        </div>
        
        <div class="footer">
            <p>This message was sent from your portfolio contact form via EmailJS</p>
            <p>💼 Professional Portfolio Contact System</p>
        </div>
    </div>
</body>
</html>
```

## Alternative Simple but Beautiful Version

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Message</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #2d3748;
            background: #f7fafc;
            margin: 0;
            padding: 20px;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            overflow: hidden;
        }
        .email-header {
            background: #4c51bf;
            color: white;
            padding: 30px;
            text-align: center;
        }
        .email-header h1 {
            margin: 0 0 10px 0;
            font-size: 24px;
            font-weight: 600;
        }
        .email-header p {
            margin: 0;
            opacity: 0.9;
        }
        .email-body {
            padding: 30px;
        }
        .info-row {
            display: flex;
            margin-bottom: 20px;
            align-items: flex-start;
        }
        .info-label {
            width: 120px;
            font-weight: 600;
            color: #4c51bf;
            flex-shrink: 0;
        }
        .info-value {
            flex: 1;
            color: #2d3748;
        }
        .message-section {
            background: #f7fafc;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #4c51bf;
            margin-top: 20px;
        }
        .message-label {
            font-weight: 600;
            color: #4c51bf;
            margin-bottom: 10px;
        }
        .message-content {
            color: #2d3748;
            white-space: pre-wrap;
        }
        .email-footer {
            background: #f7fafc;
            padding: 20px 30px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
            color: #718096;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1>📬 New Contact Message</h1>
            <p>Someone has reached out through your portfolio</p>
        </div>
        
        <div class="email-body">
            <div class="info-row">
                <div class="info-label">👤 Name:</div>
                <div class="info-value">{{from_name}}</div>
            </div>
            
            <div class="info-row">
                <div class="info-label">📧 Email:</div>
                <div class="info-value">{{from_email}}</div>
            </div>
            
            <div class="info-row">
                <div class="info-label">📝 Subject:</div>
                <div class="info-value">{{subject}}</div>
            </div>
            
            <div class="message-section">
                <div class="message-label">💬 Message:</div>
                <div class="message-content">{{message}}</div>
            </div>
        </div>
        
        <div class="email-footer">
            <p>Sent via your portfolio contact form • EmailJS</p>
        </div>
    </div>
</body>
</html>
```

## How to Use

1. **Copy** either template above
2. **Go to** EmailJS Dashboard → Email Templates
3. **Edit** your existing template (template_c38iwao)
4. **Replace** the current HTML content with one of the templates above
5. **Save** the template
6. **Test** by sending a new message from your contact form

## Features

✅ **Modern Design** - Clean, professional appearance  
✅ **Responsive** - Works on mobile and desktop  
✅ **Color-coded** - Different sections for better readability  
✅ **Icons** - Visual elements for better UX  
✅ **Gradient Backgrounds** - Modern styling  
✅ **Proper Spacing** - Easy to read and scan  
✅ **Professional Typography** - Clean fonts and hierarchy  

Choose the first template for a more elaborate design, or the second for a cleaner, simpler look! 