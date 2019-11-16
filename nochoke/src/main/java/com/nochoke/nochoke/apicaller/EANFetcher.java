package com.nochoke.nochoke.apicaller;

import com.nochoke.nochoke.EAN.EANItem;
import org.json.JSONException;
import org.json.JSONObject;

public interface EANFetcher {
    JSONObject getProductByEan(String EAN) throws JSONException;
}
