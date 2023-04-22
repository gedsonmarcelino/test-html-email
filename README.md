# Test HTML Email

This project is used to test HTML email marketing.

## Requirements

- node - 16.16.0
- SMTP Server (e.g: [elasticemail.com](elasticemail.com))

## How to install

1. Download the repository using git

```bash
$ git clone https://github.com/gedsonmarcelino/test-html-email.git
```

2. Install project

```bash
$ npm i
```

3. Set environment variables in file **.env**

```env
EMAIL_HOST=smtp.elasticemail.com
EMAIL_PORT=2525
EMAIL_USER=
EMAIL_PASSWORD=

EMAIL_FROM=test@test.com
EMAIL_TO=test1@test.com
EMAIL_SUBJECT="Test Email"

EMAIL_TEMPLATE=test.html

```

## Templates

HTML templates are located in the folder **templates/**.

## How to execute

```bash
$ npm run start
```

## Created by

[@gedsonmarcelino](https://github.com/gedsonmarcelino)
