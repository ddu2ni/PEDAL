package com.project.back.config.joinEmail;

import javax.mail.internet.MimeMessage;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class EmailProvider {
    
    private final JavaMailSender javaMailSender;

    private final String SUBJECT = "[페달의민족] 인증메일입니다.";

    public boolean sendCertificationMail(String email, String certificationNumber){

        try {

                MimeMessage message = javaMailSender.createMimeMessage();
                MimeMessageHelper messageHelper = new MimeMessageHelper(message, true);
                
            

                String htmlContent = getCertificationMessage(certificationNumber);

                messageHelper.setTo(email);
                messageHelper.setSubject(SUBJECT);
                messageHelper.setText(htmlContent,true);

                javaMailSender.send(message);
                
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }

        return true;
    }

        private String getCertificationMessage (String certificationNumber) {
            
            String certificationMessage = "";
            certificationMessage += "<h1 style='text-align: center;'>[페달의민족] 인증메일</h1>";
            certificationMessage += "<h3 style='text-align:center;'>인증코드 : <Strong style='font-size: 32px; letter-spacing: 8px;'>" 
            +certificationNumber + "</strong></h3>";

            return certificationMessage;
        }


}
