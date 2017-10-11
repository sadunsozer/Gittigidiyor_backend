package apicall;

import com.fasterxml.jackson.databind.ObjectMapper;
import dto.Image;
import dto.ItemDetailResult;
import dto.ItemSummary;
import dto.SummaryResult;
import org.springframework.stereotype.Component;

import javax.net.ssl.HttpsURLConnection;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import static org.springframework.http.HttpHeaders.USER_AGENT;

@Component
public class EbayAPICall {

    private static String userToken = "Bearer v^1.1#i^1#r^0#p^3#I^3#f^0#t^H4sIAAAAAAAAAOVXf2gTVxxv+kuKuoKI27RIerqBk0veu7vkksMEYtpqxLbRRHFVqS9379qbl7t479Kalrmu27rJcPqP4g8GHXOiG4q/tzFwg8HcGFM3mDJlsA2EDgXZBIc/kL1Lf5h2W2tb/ygsfyS87/v+/Hw/75v3QFd5xQs9y3v+mumaVtzbBbqKXS44HVSUly1+qqR4blkRKFBw9XYt7CrtLulbQlBaz0irMcmYBsHurWndIFJeGGKyliGZiGhEMlAaE8mWpUSkfqXEeYCUsUzblE2dccdqQoxf9MOALKoCF1BlLgip1Bj0mTRDTFD1IRUiAakgINJvuk9IFscMYiPDDjEcgCILAQthEvISABLwewQoNjHutdgimmlQFQ9gwvl0pbytVZDr6KkiQrBlUydMOBapSzRGYjW1Dckl3gJf4QEcEjays2T4Kmoq2L0W6Vk8ehiS15YSWVnGhDDecH+E4U6lyGAyE0g/DzUCwaCKAxhCEJB5zv9EoKwzrTSyR8/DkWgKq+ZVJWzYmp0bC1GKRuolLNsDqwbqIlbjdn5WZZGuqRq2Qkzt0siLaxK1qxl3Ih63zDZNwYpTKfQHOFHgeZ+fCROkZEkHbgYDQfo9DUA8IkrUNBTNAYy4G0x7KaYZ4+G4cJKvABeq1Gg0WhHVdrIp1PMN4cc3OQ3t72DWbjWcnuI0BcGdX46N/iAdHhHgSREiICtBH8dDv4/jAC/+OyGcsz5OUoSdvkTica+TC06hHJtG1mZsZ3QkY1am8GbT2NIUifepHB9QMav4gyorBFWVTfkUPwtVjAHGqZQcDPxfuGHblpbK2niIHyM38gWGmIRsZnDc1DU5x4xUyc+aATZsJSGm1bYzktfb3t7uaec9ptXi5QCA3nX1KxNyK04jZkhXG1uZ1fK8kDG1Ippk5zI0m62UdjS40cKEeUuJI8vOJbCuU8EgaYflFh4p/Y8iiVPk1CrPsSfUAcpoHofTHtlMe01Ez7Ajas5n7H4cJS+hAHn6TwT17LEwUkxDz03EeBw2mtFGSWVauVECOmd9bAfjCIpk2cwa9kRqHDAdh4Wa1VVN152zM5GABebjSdNAes7WZDIUclLEj2QyMWVqET9Bh6RhJTrY+lydZhE7ycZX17BBnyIKqhxQWQ5xnCpANKm6FdymybhZm2K1G1ldn1RdNbhtqvUTqbKQQio964to80RVYQVBxGwAwAALedWXkn2A9wNxUnXXt0y1Vjo3HTEQFH3UalKlRXWNjohkbqr9QS03iY2VyZVGb4dTqyhn1AxOmoDqD7IKJyCWThuOEjYos3T2CI9b8ghBwUXrH/dr7/DHbbgo/4HdrjOg23WCvo+BFzwHF4Dq8pI1pSUz5hLNxh4NqR6itRj0zWZhz2acyyDNKi53ra86fqS54DnduxE8M/SgriiB0wte16Dq0U4ZrHx6JhQhgBDyAAB/E1jwaLcUzimdHd+y5/pXjRc3bY5ue29/yZdVHy24eBbMHFJyucqKSrtdRclvpn22s2hny4Hgx+nERmNX7PKFh99+Ki+91FnR9zV37+6Gg6F3f+sBqxb18crC6n2vCVf33m4lB+o2/TCrcvG+owt3ttWff3Bqdvml1w91VG9/Z0emtOmNedUbTm6///nzu871/nSnU1m2YsvBPdWurlR38sTpk7O2XYuwZw9y647fWP/Av/v9Ha3zrl3onr//7pGyxpVra6/s/v1+T9G0c+HonU9uzD1ctX3+mY5ju36+eumVy7c2BmfNP1X/bNn1o+eiV87WvPzHbaHzcN+f0diPyw6db+2dXS3erPzu2lsnPjz9pnJr0cMZe+PCjS8abuIVh1d13XMZb8/JgTWeh7c+qBT2//qq8Muxq0c6v+9v398a5u9k6BAAAA==";
    private static String contentType="application/json";



    // HTTP GET request
    public SummaryResult getItems(String keyword){


            String url = "https://api.ebay.com/buy/browse/v1/item_summary/search?q=";
            url = url + keyword;
            url = url + "&limit=20";
        try {
            String response = getResultStrig(url);
            ObjectMapper mapper = new ObjectMapper();
            SummaryResult result = mapper.readValue(response.toString(), SummaryResult.class);

            return result;
        }catch (Exception e){
            SummaryResult result = new SummaryResult();
            result.setItemSummaries(new ArrayList<ItemSummary>());
            ItemSummary is = new ItemSummary();
            Image image = new Image() ;
            image.setImageUrl("https://i.ebayimg.com/thumbs/images/g/5ZIAAOSwPe1T18CO/s-l225.jpg");
            is.setImage(image);
            is.setItemId("391104823180");
            is.setTitle("WG775 WORX 14\" 24V Cordless Lawn Mower With Removable Battery");
            result.getItemSummaries().add(is);
            result.setHref("referans");
            return result;
        }
    }

    public ItemDetailResult getItemDetail(String itemId) {

            itemId = itemId.replaceAll("\\|","%7C");
            String url = "https://api.ebay.com/buy/browse/v1/item/";
            url = url + itemId;
        try {
            String response = getResultStrig(url);
            ObjectMapper mapper = new ObjectMapper();
            ItemDetailResult result = mapper.readValue(response, ItemDetailResult.class);

            return result;
        }catch (Exception e){

            ItemDetailResult result = new ItemDetailResult();
            Image image = new Image() ;
            image.setImageUrl("https://i.ebayimg.com/thumbs/images/g/5ZIAAOSwPe1T18CO/s-l225.jpg");
            result.setImage(image);
            result.setItemId("391104823180");
            result.setTitle("WG775 WORX 14\" 24V Cordless Lawn Mower With Removable Battery");
            return result;
        }
    }

    private String getResultStrig(String url) throws IOException {

        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        // optional default is GET
        con.setRequestMethod("GET");

        //add request header
        con.setRequestProperty("User-Agent", USER_AGENT);
        List headers = new ArrayList();
        headers.add(userToken);
        con.setRequestProperty("Authorization", userToken);


        int responseCode = con.getResponseCode();
        System.out.println("\nSending 'GET' request to URL : " + url);
        System.out.println("Response Code : " + responseCode);

        BufferedReader in = new BufferedReader(
                new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

        //print result
        System.out.println(response.toString());
        return response.toString();
    }
}
