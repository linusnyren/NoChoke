package com.nochoke.nochoke.integrationtests;

import org.json.JSONObject;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.web.client.RestTemplate;
import sun.jvm.hotspot.utilities.Assert;

@SpringBootTest
@TestPropertySource(locations="classpath:application-dev.properties")
class BarcodeAPI {


    @Test
    void testBarcode(){
        RestTemplate restTemplate = new RestTemplate();


        Assertions.assertTrue(true);
    }
}
