package com.nochoke.nochoke.apicaller;

import org.json.JSONException;
import org.json.JSONObject;

public interface EANFetcher {
    JSONObject getProductByEan(String EAN) throws JSONException;
}
