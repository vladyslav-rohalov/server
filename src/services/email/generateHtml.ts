export const generateConfirmLetter = (name: string, code: string): string => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html
    dir="ltr"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    lang="en"
  >
    <head>
      <meta charset="UTF-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="x-apple-disable-message-reformatting" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta content="telephone=no" name="format-detection" />
      <title>Confirm registration</title>
      <!--[if (mso 16)]>
        <style type="text/css">
          a {
            text-decoration: none;
          }
        </style>
      <![endif]-->
      <!--[if gte mso 9
        ]><style>
          sup {
            font-size: 100% !important;
          }
        </style><!
      [endif]-->
      <!--[if gte mso 9]>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      <![endif]-->
      <!--[if !mso]><!-- -->
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat+Subrayada:wght@700&family=Open+Sans:ital,wght@0,400;0,500;1,400&display=swap"
        rel="stylesheet"
      />
      <!--<![endif]-->
      <style type="text/css">
        #outlook a {
          padding: 0;
        }
        .es-button {
          mso-style-priority: 100 !important;
          text-decoration: none !important;
        }
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
        }
        .es-desk-hidden {
          display: none;
          float: left;
          overflow: hidden;
          width: 0;
          max-height: 0;
          line-height: 0;
          mso-hide: all;
        }
        @media only screen and (max-width: 600px) {
          p,
          ul li,
          ol li,
          a {
            line-height: 150% !important;
          }
          h1,
          h2,
          h3,
          h1 a,
          h2 a,
          h3 a {
            line-height: 120%;
          }
          h1 {
            font-size: 30px !important;
            text-align: left;
          }
          h2 {
            font-size: 24px !important;
            text-align: left;
          }
          h3 {
            font-size: 20px !important;
            text-align: left;
          }
          .es-header-body h1 a,
          .es-content-body h1 a,
          .es-footer-body h1 a {
            font-size: 30px !important;
            text-align: left;
          }
          .es-header-body h2 a,
          .es-content-body h2 a,
          .es-footer-body h2 a {
            font-size: 24px !important;
            text-align: left;
          }
          .es-header-body h3 a,
          .es-content-body h3 a,
          .es-footer-body h3 a {
            font-size: 20px !important;
            text-align: left;
          }
          .es-menu td a {
            font-size: 14px !important;
          }
          .es-header-body p,
          .es-header-body ul li,
          .es-header-body ol li,
          .es-header-body a {
            font-size: 14px !important;
          }
          .es-content-body p,
          .es-content-body ul li,
          .es-content-body ol li,
          .es-content-body a {
            font-size: 14px !important;
          }
          .es-footer-body p,
          .es-footer-body ul li,
          .es-footer-body ol li,
          .es-footer-body a {
            font-size: 14px !important;
          }
          .es-infoblock p,
          .es-infoblock ul li,
          .es-infoblock ol li,
          .es-infoblock a {
            font-size: 12px !important;
          }
          *[class='gmail-fix'] {
            display: none !important;
          }
          .es-m-txt-c,
          .es-m-txt-c h1,
          .es-m-txt-c h2,
          .es-m-txt-c h3 {
            text-align: center !important;
          }
          .es-m-txt-r,
          .es-m-txt-r h1,
          .es-m-txt-r h2,
          .es-m-txt-r h3 {
            text-align: right !important;
          }
          .es-m-txt-l,
          .es-m-txt-l h1,
          .es-m-txt-l h2,
          .es-m-txt-l h3 {
            text-align: left !important;
          }
          .es-m-txt-r img,
          .es-m-txt-c img,
          .es-m-txt-l img {
            display: inline !important;
          }
          .es-button-border {
            display: block !important;
          }
          a.es-button,
          button.es-button {
            font-size: 18px !important;
            display: block !important;
            border-right-width: 0px !important;
            border-left-width: 0px !important;
            border-top-width: 15px !important;
            border-bottom-width: 15px !important;
          }
          .es-adaptive table,
          .es-left,
          .es-right {
            width: 100% !important;
          }
          .es-content table,
          .es-header table,
          .es-footer table,
          .es-content,
          .es-footer,
          .es-header {
            width: 100% !important;
            max-width: 600px !important;
          }
          .es-adapt-td {
            display: block !important;
            width: 100% !important;
          }
          .adapt-img {
            width: 100% !important;
            height: auto !important;
          }
          .es-m-p0 {
            padding: 0px !important;
          }
          .es-m-p0r {
            padding-right: 0px !important;
          }
          .es-m-p0l {
            padding-left: 0px !important;
          }
          .es-m-p0t {
            padding-top: 0px !important;
          }
          .es-m-p0b {
            padding-bottom: 0 !important;
          }
          .es-m-p20b {
            padding-bottom: 20px !important;
          }
          .es-mobile-hidden,
          .es-hidden {
            display: none !important;
          }
          tr.es-desk-hidden,
          td.es-desk-hidden,
          table.es-desk-hidden {
            width: auto !important;
            overflow: visible !important;
            float: none !important;
            max-height: inherit !important;
            line-height: inherit !important;
          }
          tr.es-desk-hidden {
            display: table-row !important;
          }
          table.es-desk-hidden {
            display: table !important;
          }
          td.es-desk-menu-hidden {
            display: table-cell !important;
          }
          .es-menu td {
            width: 1% !important;
          }
          table.es-table-not-adapt,
          .esd-block-html table {
            width: auto !important;
          }
          table.es-social {
            display: inline-block !important;
          }
          table.es-social td {
            display: inline-block !important;
          }
          .es-desk-hidden {
            display: table-row !important;
            width: auto !important;
            overflow: visible !important;
            max-height: inherit !important;
          }
        }
        @media screen and (max-width: 384px) {
          .mail-message-content {
            width: 414px !important;
          }
        }
      </style>
    </head>
    <body
      style="
        width: 100%;
        font-family: 'Open Sans', arial, 'helvetica neue', helvetica, sans-serif;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        padding: 0;
        margin: 0;
      "
    >
      <div dir="ltr" class="es-wrapper-color" lang="en" >
         <table
          class="es-wrapper"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          style="
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            border-collapse: collapse;
            border-spacing: 0px;
            padding: 0;
            margin: 0;
            width: 100%;
            height: 100%;
            background-repeat: repeat;
            background-position: center top;
          "
        >
          <tr>
            <td valign="top" style="padding: 0; margin: 0">
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-content"
                align="center"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
              >
                <tr>
                  <td align="center" style="padding: 0; margin: 0">
                    <table
                      bgcolor="#494949"
                      class="es-content-body"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: #494949;
                        border-radius: 20px 20px 0 0;
                        width: 600px;
                      "
                    >
                      <tr>
                        <td
                          align="left"
                          style="
                            padding: 0;
                            margin: 0;
                            padding-top: 40px;
                            padding-left: 40px;
                            padding-right: 40px;
                          "
                        >
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr>
                              <td
                                align="center"
                                valign="top"
                                style="padding: 0; margin: 0; width: 520px"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      class="es-m-txt-c"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        font-size: 0px;
                                      "
                                    >
                                      <a
                                        target="_blank"
                                        href="https://smokey.top"
                                        style="
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                        "
                                        ><img
                                          src="https://smokey-s3.s3.eu-central-1.amazonaws.com/logo.png"
                                          alt="Smokey Logo"
                                          style="
                                            display: block;
                                            border: 0;
                                            outline: none;
                                            text-decoration: none;
                                            -ms-interpolation-mode: bicubic;
                                          "
                                          height="60"
                                          title="Smokey Logo"
                                      /></a>
                                    </td>
  
                                    <td
                                      class="esdev-mso-td"
                                      valign="middle"
                                      style="padding: 0; margin: 0"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="es-right"
                                        align="right"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                          float: right;
                                        "
                                      >
                                        <tr>
                                          <td
                                            align="center"
                                            valign="top"
                                            style="
                                              padding: 0;
                                              margin: 0;
                                              width: 453px;
                                            "
                                          >
                                            <table
                                              cellpadding="0"
                                              cellspacing="0"
                                              width="100%"
                                              style="
                                                mso-table-lspace: 0pt;
                                                mso-table-rspace: 0pt;
                                                border-collapse: collapse;
                                                border-spacing: 0px;
                                              "
                                            >
                                              <tr>
                                                <td
                                                  align="left"
                                                  style="padding: 0; margin: 0"
                                                >
                                                  <h1
                                                    style="
                                                      margin: 0;
                                                      -webkit-text-size-adjust: none;
                                                      -ms-text-size-adjust: none;
                                                      mso-line-height-rule: exactly;
                                                      font-family: 'Montserrat Subrayada',
                                                        Arial, sans-serif;
                                                      line-height: 48px;
                                                      color: #001219;
                                                      font-size: 32px;
                                                    "
                                                  >
                                                    SMOKEY
                                                  </h1>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style="
                            padding: 0;
                            margin: 0;
                            padding-top: 20px;
                            padding-left: 40px;
                            padding-right: 40px;
                          "
                        >
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr>
                              <td
                                align="center"
                                valign="top"
                                style="padding: 0; margin: 0; width: 520px"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  bgcolor="#001219"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: separate;
                                    border-spacing: 0px;
                                    background-color: #001219;
                                    border-radius: 10px;
                                  "
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      style="padding: 20px; margin: 0"
                                    >
                                      <h2
                                        style="
                                          margin: 0;
                                          line-height: 34px;
                                          mso-line-height-rule: exactly;
                                          font-family: 'Open Sans', Arial,
                                            sans-serif;
                                          font-size: 28px;
                                          font-style: normal;
                                          font-weight: bold;
                                          color: #f5f6fa;
                                        "
                                      >
                                        Welcome,&nbsp;${name}
                                      </h2>
                                      <p
                                        style="
                                          margin: 0;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          font-family: 'Open Sans', Arial,
                                            sans-serif;
                                          line-height: 27px;
                                          color: #f5f6fa;
                                          font-size: 18px;
                                        "
                                      >
                                        <br />
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          font-family: 'Open Sans', Arial,
                                            sans-serif;
                                          line-height: 27px;
                                          color: #f5f6fa;
                                          font-size: 18px;
                                        "
                                      >
                                        You're receiving this message because you
                                        recently signed up for a account.<br /><br />Confirm
                                        your email address by clicking the button
                                        below. This step provides additional
                                        security by confirming that you are the
                                        owner of this email.<br /><br /></p>
                                      </p>
                                      
                                      <a
                                        target="_blank"
                                        href="https://smokey.top?code=${code}"
                                        style="
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #005f73;
                                          font-size: 14px;
                                        "
                                        >https://smokey.top?code=${code}</a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-content"
                align="center"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
              >
                <tr>
                  <td align="center" style="padding: 0; margin: 0">
                    <table
                      bgcolor="#494949"
                      class="es-content-body"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: #494949;
                        width: 600px;
                      "
                    >
                      <tr>
                        <td
                          align="left"
                          style="
                            margin: 0;
                            padding-top: 30px;
                            padding-bottom: 40px;
                            padding-left: 40px;
                            padding-right: 40px;
                          "
                        >
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr>
                              <td
                                align="center"
                                valign="top"
                                style="padding: 0; margin: 0; width: 520px"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr>
                                    <td
                                      align="center"
                                      style="padding: 0; margin: 0"
                                    >
                                      <span
                                        class="msohide es-button-border"
                                        style="
                                          border-style: solid;
                                          background: #005f73;
                                          border-width: 0px;
                                          display: block;
                                          border-radius: 30px;
                                          width: auto;
                                          mso-hide: all;
                                        "
                                        ><a
                                          href="https://smokey.top?code=${code}"
                                          class="es-button msohide"
                                          target="_blank"
                                          style="
                                            mso-style-priority: 100 !important;
                                            text-decoration: none;
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            color: #f5f6fa;
                                            font-size: 22px;
                                            padding: 15px 20px 15px 20px;
                                            display: block;
                                            background: #005f73;
                                            border-radius: 30px;
                                            font-family: 'Open Sans', Arial,
                                              sans-serif;
                                            font-weight: bold;
                                            font-style: normal;
                                            line-height: 26px;
                                            width: auto;
                                            text-align: center;
                                            mso-padding-alt: 0;
                                            mso-border-alt: 10px solid #005f73;
                                            padding-left: 5px;
                                            padding-right: 5px;
                                          "
                                          >Confirm email</a
                                        ></span
                                      >
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style="
                            padding: 0;
                            margin: 0;
                            padding-left: 40px;
                            padding-right: 40px;
                          "
                        >
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr>
                              <td
                                align="center"
                                valign="top"
                                style="padding: 0; margin: 0; width: 520px"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      style="padding: 0; margin: 0"
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          font-family: 'Open Sans', Arial,
                                            sans-serif;
                                          line-height: 27px;
                                          color: #f5f6fa;
                                          font-size: 18px;
                                          font-style: italic;
                                        "
                                      >
                                        Thanks,<br /><br />Smokey
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-bottom: 20px;
                                        padding-top: 40px;
                                        font-size: 0;
                                      "
                                    >
                                      <table
                                        border="0"
                                        width="100%"
                                        height="100%"
                                        cellpadding="0"
                                        cellspacing="0"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                      >
                                        <tr>
                                          <td
                                            style="
                                              padding: 0;
                                              margin: 0;
                                              border-bottom: 1px solid #666666;
                                              background: unset;
                                              height: 1px;
                                              width: 100%;
                                              margin: 0px;
                                            "
                                          ></td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-content"
                align="center"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
              >
                <tr>
                  <td align="center" style="padding: 0; margin: 0">
                    <table
                      bgcolor="#494949"
                      class="es-content-body"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: #494949;
                        border-radius: 0 0 20px 20px;
                        width: 600px;
                      "
                    >
                      <tr>
                        <td
                          class="esdev-adapt-off"
                          align="left"
                          style="
                            margin: 0;
                            padding-top: 20px;
                            padding-bottom: 20px;
                            padding-left: 40px;
                            padding-right: 40px;
                          "
                        >
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            class="esdev-mso-table"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                              width: 520px;
                            "
                          >
                            <tr>
                              <td
                                class="esdev-mso-td"
                                valign="top"
                                style="padding: 0; margin: 0"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  align="left"
                                  class="es-left"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                    float: left;
                                  "
                                >
                                  <tr>
                                    <td
                                      align="center"
                                      valign="top"
                                      style="padding: 0; margin: 0; width: 47px"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                      >
                                        <tr>
                                          <td
                                            align="center"
                                            class="es-m-txt-l"
                                            style="
                                              padding: 0;
                                              margin: 0;
                                              font-size: 0px;
                                            "
                                          >
                                            <a
                                              target="_blank"
                                              href="https://smokey.top"
                                              style="
                                                -webkit-text-size-adjust: none;
                                                -ms-text-size-adjust: none;
                                                mso-line-height-rule: exactly;
                                                text-decoration: underline;
                                                color: #f5f6fa;
                                                font-size: 18px;
                                              "
                                              ><img
                                                src="https://smokey-s3.s3.eu-central-1.amazonaws.com/logo.png"
                                                alt="Smokey Logo"
                                                style="
                                                  display: block;
                                                  border: 0;
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                "
                                                height="60"
                                                title="Smokey Logo"
                                            /></a>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td style="padding: 0; margin: 0; width: 20px"></td>
                              <td
                                class="esdev-mso-td"
                                valign="middle"
                                style="padding: 0; margin: 0"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="es-right"
                                  align="right"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                    float: right;
                                  "
                                >
                                  <tr>
                                    <td
                                      align="center"
                                      valign="middle"
                                      style="padding: 0; margin: 0; width: 453px"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                      >
                                        <tr>
                                          <td
                                            align="left"
                                            style="padding: 0; margin: 0"
                                          >
                                            <p
                                              style="
                                                margin: 0;
                                                -webkit-text-size-adjust: none;
                                                -ms-text-size-adjust: none;
                                                mso-line-height-rule: exactly;
                                                font-family: 'Open Sans', Arial,
                                                  sans-serif;
                                                line-height: 24px;
                                                color: #f5f6fa;
                                                font-size: 16px;
                                              "
                                            >
                                              This link expire in 24 hours.
                                              <br />If you have questions, contact
                                              us.
                                            </p>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </body>
  </html>
  
  `;
};
