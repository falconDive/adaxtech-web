import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Grid, Accordion, Icon, Tab } from "semantic-ui-react";
import { connect } from "react-redux";

import logo from "./../../assets/adax/logo.svg";
// import { HYB_COUNT_DISABLE_FEE } from './../../config/basetrade-config';
// import { formatNumberToLocale } from './../../helpers/helpers';

export const Static = styled.div`
  color: #ffffff;
  padding: 50px 0;
  h2 {
    margin-bottom: 30px;
  }
  .basetradeLogo {
    width: 100%;
    max-width: 350px;
  }
  .ui.segment {
    padding: 0;
  }
  .ui.accordion .title:not(.ui) {
    color: #ffffff;
    font-family: "Basis Grotesque Bold Pro" !important;
    font-size: 20px;
    display: flex;
    line-height: 1.4;
  }
  .ui.attached.segment,
  .ui.vertical.menu {
    background: transparent;
    border: 0;
    a {
      color: #ffffff !important;
      padding-left: 0;
      line-height: 1.5;
      /* font-family: "Basis Grotesque Pro" !important; */
      font-family: "Basis Grotesque Bold Pro" !important;
      &.active {
        color: #74f9fc !important;
      }
    }
  }
  .accordion.ui {
    .content p {
      padding-left: 37px;
      line-height: 1.5;
      color: #ccc;
      margin-bottom: 10px;
    }
    .accordion-item {
      text-align: justify;
      i {
        color: #fab601;
      }
    }
  }

  .accordion-item {
    border-bottom: 2px solid rgba(255, 255, 255, 0.03);
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  .msg-wrapper {
    white-space: pre-wrap;
  }
  .list-header {
    background: #bb8801;
    padding: 10px;
  }
`;
const Fees = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const FaqsItems = [
    {
      question: "What is ADAX?",
      content:
        "ADAX is licensed as an Overseas Virtual Currency Exchange (OVCE)  with the Cagayan Economic Zone Authority (CEZA) in the Philippines. It provides a security token issuance platform, a security token investment platform and a regulated exchange for secondary trading of utility as well as security tokens"
    },
    {
      question: "Where is the company registered / licensed ?",
      content: `Company information: 
  ADAX TECH LIMITED (Cyprus) Kyriakou Matsi, 16 EAGLE HOUSE, 3rd Floor, 1082 Nicosia Cyprus
Licence details:
  ADAX Tech is Licensed as an Overseas Virtual Currency Exchange (OVCE) License from the Cagayan Economic Zone Authority (CEZA) 
  in the Philippines`
    },
    {
      question: "How do I get my token listed?",
      content: `You can contact us on support@adaxtech.com for listing requests for Utility or Security tokens`
    },
    {
      title: "My Account"
    },
    {
      question:
        "How can I contact customer support if there are issues on my account?",
      content: `To get support for your ADAX account, you may send an email to support@adaxtech.com . You can simply type the concern on the subject line and provide the summary and details of your concern.`
    },
    {
      question: "Do I need to undergo KYC?",
      content: `Yes, you are required to  undergo KYC in order to activate your account and to comply with  KYC/AML regulations. Depending on your jurisdiction there may be different requirements.`
    },
    {
      question: "How do I register?",
      content: `To register on ADAX for the first time go to https://adaxtech.com and then click the "Sign Up" button. Once registration is complete, you will be able to receive a confirmation email on your registered email address. After confirming your account through the sent mailer, you will be required to complete your KYC. Once you complete your KYC process you are ready to trade.`
    },
    {
      question: "Verify your identity",
      content: `To verify your identity , follow these steps: 
      1) On the home screen Tap Settings, then click Identity Verification. 
      2) Click Verify New Document, then select your country of residence and click Continue. 
      3) Choose your document type (options may vary depending on your country of residence.) 
      4) Take a clear photo of the identity document, then click Continue. 
      5) A prompt will be shown confirming your verification.`
    },
    {
      question: "What are the other possible ways to secure my account?",
      content: `ADAX supports native two-factor authentication (2FA) and SMS authentication to help you secure your account.`
    },
    {
      question: "How to reset my password?",
      content: `Under log in page, click Forgot your Password at the lower part of the screen. 
      Enter your email address and we will send you the password reset link.`
    },
    {
      question: "What 2FA verification app do you recommend for ADAX?",
      content: `We recommend Authy or Google Authenticator`
    },
    {
      question: "How do I setup my 2 factor authentication?",
      content: `2FA or 2 Factor Authentication is an extra layer of security that you can use to secure access to your account. To set up your account’s 2FA, please follow these steps: 
      Step 1: Make sure that you have Authy or Google Authenticator installed on your device.
      Step 2: Log in to your account at adaxtech.com and go on the account tab page.
      Step 3: In the account’s tab, you’ll be able to see the “Enable 2FA” button, click it and follow the instructions`
    },
    {
      question: "Change my personal information",
      content: `To change your personal information such as phone number, email, and address, please create a support request through our support team at support@adaxtech.com`
    },
    {
      question: "Lost my 2-factor authentication",
      content: `To recover access to your ADAX if you've lost access/forgotten your two-factor authentication, you may contact our support team for assistance. Basic information such as the details of your last transactions, identity document, and personal information will be asked to verify your account.`
    },
    {
      question: "How do I know it is secure?",
      content: `ADAX uses bank-grade 256-bit encryption and authentication protocols to securely log you in and protect your sensitive personal information.`
    },
    {
      question:
        "Can we request a copy of the transaction that we have for the past week? months? years?",
      content: `Yes. Please check on the transaction history tab. We will be able to provide your transaction from day 1 you open your account to recent transactions`
    },
    {
      question: "What is my verification level?",
      content: `You can see your verification level on the account overview page. Please see our fee page for more details on verification levels and cryptocurrency transaction limits for each level. Adaxtech.com/fees`
    },
    {
      question: "How to deposit to ADAX Exchange?",
      content: `Step 1: Login to your Exchange account and go to Deposit & Withdrawals button under Assets Tab 
Step 2: Click Deposit and select the currency to Deposit (Bitcoin, Ethereum, HYB Token & etc.) or Security tokens. 
Step 3: Deposit address will be shown on your screen. Copy the address provided by the Exchange and paste it to your personal wallet to 
            transfer the desired amount. Please double check the quantity and address to ensure you are depositing the right token and the right 
            quantity to your address. ee security token section for more details on them.`
    },
    {
      question: "Missing deposits",
      content: `Did you deposit your assets to the exchange and it is still not reflecting in your account’s balance? Please contact our support team support@adaxtech.com 
Make sure to provide all of the required information.
Registered Email:
Full Name:
Deposited Assets: (Name of token/coin)
Quantity of Deposited Address:
TX Hash:
Details: (Explanation as to what have happened)`
    },
    {
      question: "How to withdraw from ADAX?",
      content: `Step 1: Login to your Exchange account and go to Deposit & Withdrawals button under Assets Tab        
Step 2: Click Withdraw and select the currency to Withdraw (Bitcoin, Ethereum, HYBm Token & etc.) or the desired Security token         
Step 3: You will be asked for the amount you want to withdraw and the external address you would like to transfer your balance to from the exchange. Comment field is optional.         Double check the address and quantity before clicking the Withdraw Process. 
Note:An email will be sent to your registered email account for withdraw verification. This is an increased security measure. Once you confirm from the email link, the transaction is processed. Network confirmations may take up to 1 hour. See security token section for more details on them.`
    },
    {
      question: "Assets withdrawn to wrong address",
      content: `If your withdrawal was already processed and your withdrawal status shows that it “Fully Processed”, there is no way for you to cancel and retrieve your wrongly sent assets.`
    },
    {
      question: "Missing withdrawals",
      content: `Please contact our support at support@adaxtech.com if you haven’t received your withdrawal within 24-48 hours. 
Make sure to provide all of the required information.
Registered Email:
Full Name:
Deposited Assets: (Name of token/coin)
Quantity of Deposited Address:
TX Hash:
Details: (Explanation as to what have happened)
`
    },
    {
      question:
        "Do I need to submit a proof of residence? Where should I send my proof of residence?",
      content: `Proof of residence is required in order for your account to get upgraded from Level 1 to Level 2. At this level, you get higher deposit/withdrawal and trading limits. To signify your intention to get upgraded to Level 2, please send us an email addressed to support@adaxtech.com. Our Support Team will be forwarding your request to our Compliance Team.
Make sure to provide all of the required information.
Registered Email:
Full Name:
Deposited Asset:
`
    },
    {
      question: "What do you accept for proof of residence?",
      content: `We accept Billing Statement for utilities (Electric, Phone, Water, Cable, etc.), Bank or Credit Card Statement, and in selected jurisdictions valid and verifiable Government-issued Documents (e.g., tax  statement). Please ensure that the proof of  residence  is billed under your registered name, the billing address matches your jurisdiction or country of registered address, and the bill date should not be older than or beyond the last 3 months.`
    },
    {
      question: "How much will be the fees?",
      content: `For fee information please refer to https://adaxtech.com/fees`
    },
    {
      question: "How fast is the normal transaction?",
      content: `Transactions within ADAX are carried over in real time`
    },
    {
      question: "How can I use HYB tokens?",
      content: `You will get discounts on trading fees by using your HYB tokens refer to https://adaxtech.com/fees`
    },

    {
      title: "SECURITY TOKENS"
    },
    {
      question: "How can I trade Security Tokens",
      content: `To trade security tokens you will have to get to a higher verfication level  by submitting your proof of address, source of funds and accrediation documents`
    },
    {
      question: "How do I submit accreditation documents?",
      content: `You may request information about accreditation through email at support@adaxtech.com. Our Compliance Team will  email you our suggested secure methods for sending your documents. `
    },
    {
      question: "What documents do you accept for accreditation?",
      content: `You need to declare, at the minimum, your Source of Income and Income Range with supporting documents. If you are a citizen or resident of a jurisdiction where proof of accreditation is required (or are investing in security tokens where proof of accreditation is required), you need to declare your Source of Wealth / Funds with supporting documents. For corporate customer-investors, we would require Audited Financial Statements.`
    },
    {
      question: "I would like to  close my account with ADAX",
      content: `To close your account with ADAX, please send us an email through support@adaxtech.com indicating your request. Our Compliance Team will then send you a form to fill out and sign, and ask you to provide documents to prove your identity and ownership of the account. Upon receipt by Compliance Team of a properly accomplished and signed form with corresponding documents, we will close your account immediately.`
    },
    {
      question: "How do I close my account and erase my data with ADAX?",
      content: `To close your account and erase your data with ADAX, please send us an email through support@adaxtech.com indicating your request. Our Compliance Team will then send you a form to fill out and sign, and ask you to provide documents to prove your identity and ownership of the account. Upon receipt by Compliance Team of a properly accomplished and signed form with corresponding documents, we will close your account immediately and erase your data, in compliance with data privacy regulations.`
    },
    {
      question: "Deposit Security tokens",
      content: `To Deposit Security tokens you have to ensure that tokens are deposited to whitelisted addresses only and your account is eliglible to trade security tokens, our team will check and accept deposits only to whitelisted addresses and eleigible accounts. You will NOT be able to access tokens from any non-whitelist or non eligible accounts address due to regulatory concerns`
    },
    {
      question: "Withdraw Security tokens",
      content: `To withdraw Security tokens you have to ensure that tokens are withdrawn to whitelisted addresses only, our team will check and accept withdrawals only to whitelisted addresses. You will NOT be able to withdraw to any non-whitelist address due to regulatory concerns`
    },
    {
      question:
        "What is my assurance that my security tokens are backed by assets?",
      content: `CEZA regulations require token issuers to have audit certification on the assets backing up their security tokens.`
    },
    {
      title: "Privacy and Security"
    },
    {
      question: "What is ADAX's privacy policy",
      content: `To know more about ADAX's Privacy Policy, please open this link: https://adaxtech.com/privacy-policy`
    },
    {
      question: "Phishing email",
      content: `Phishing emails are used by malicious actors to attempt to impersonate a legitimate entity in order to trick a user to perform an action such as clicking a malicious link, of revealing sensitive information such as usernames, passwords or credit card numbers. When receiving emails, always verify the sender’s true email address and inspect any URL or picture embedded in the email body that may redirect to an unknown site. You should also look for generic salutations, grammar mistakes or spelling errors. ADAX will always email you from noreply@adaxtech.com or support@adaxtech.com. ADAX will never ask you to provide your password, private wallet keys or credit card information`
    },
    {
      question: "Spoofed URL / Website",
      content: `Often used in conjunction with Phishing emails, Spoofed websites are used by malicious actors to trick users in believing that they are accessing a legitimate website, in an attempt to steal their credentials and other sensitive information. A spoofed website may look exactly like the original, with the exception a certain key details, for example the spelling of the URL, or the lack of HTTPS encryption. When accessing https://adaxtech.com, ensure the full address is spelt correctly and that a ‘Secure’ green lock appears on the left side of the URL. To avoid falling victim to spoofed URL, bookmark https://adaxtech.com and always use it to access the site`
    },
    {
      question: "Scammers on Telegram",
      content: `Scammers have been reported as impersonating ADAX employees and our affiliates on Telegram. Legitimate representatives will display the ‘admin’ mention next to their username. We will never reach out to you via Direct Message, or ask you to transfer ETH or any other currencies. If you wish to contact our support team, please email us on support@adaxtech.com`
    },
    {
      question: "Scammers on Social Media",
      content: `Scammers have also been reported as impersonating ADAX employees and our affiliates on several social media platforms. Our employees and affiliates will never ask any confidential information, or ask you to transfer ETH or any other currency directly to them. If you wish to contact our support team, you may email us on support@adaxtech.com`
    },
    {
      question: "General Security Tips",
      content: `•	Always be suspicious when someone reaches out to you unexpectedly
•	Pay attention to details in email addresses, URLs, embedded links or pictures
•	Do not click on links from unknown sources
•	Do not reveal sensitive information under any circumstances
•	Do not transfer funds or coins to individuals contacted via Telegram, Social Media or emails
•	Use a unique and complex password for adaxtech.com
•	Enable 2FA on all sites where possible, such as adax, gmail, yahoo and any online account
•	Avoid SMS-based 2FA. Use 2FA apps such as Google Authenticator or other device-based password
•	Do not set SMS as a password reset or recovery method for your accounts
•	Do not store sensitive information such as password, private keys or seeds in emails
•	Keep your computer and applications up-to-date, apply security patches where possible
•	Use a reputable anti-malware software
•	Report any suspicious activity to our support team and the relevant authorities`
    }
  ];
  console.log(activeIndex);
  const FaqsList = FaqsItems.map((item, key) => {
    if (item.hasOwnProperty("title")) {
      return (
        <h3 key={key} className="list-header">
          {item.title}
        </h3>
      );
    }
    return (
      <div className="accordion-item" key={key}>
        <Accordion.Title
          active={activeIndex === key + 1}
          index={key + 1}
          onClick={() => {
            setActiveIndex(key + 1);
          }}
        >
          <Icon name="dropdown" /> {item.question}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === key + 1}>
          <p className="msg-wrapper">{item.content}</p>
        </Accordion.Content>
      </div>
    );
  });
  return (
    <Static>
      <Grid style={{ maxWidth: "965px", margin: "0 auto" }}>
        <Grid.Column>
          <div className="text-center">
            <Link to="/">
              <img className="adax-logo" src={logo} alt="ADAX Logo" />
            </Link>
          </div>
          {/* <Tab menu={{ fluid: true, vertical: true }} panes={panes} /> */}
          <Grid>
            <Grid.Column>
              <br />
              <h2 style={{ textAlign: "center" }}>Frequently Ask Questions</h2>
              <Accordion>{FaqsList}</Accordion>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    </Static>
  );
};

const mapStatToProps = state => {
  return {
    Translation: state.Translation
  };
};
export default connect(
  mapStatToProps,
  {}
)(Fees);
