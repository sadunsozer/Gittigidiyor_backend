
package dto;

import java.util.HashMap;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "originalPrice",
    "discountPercentage",
    "discountAmount"
})
public class MarketingPrice {

    @JsonProperty("originalPrice")
    private OriginalPrice originalPrice;
    @JsonProperty("discountPercentage")
    private String discountPercentage;
    @JsonProperty("discountAmount")
    private DiscountAmount discountAmount;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("originalPrice")
    public OriginalPrice getOriginalPrice() {
        return originalPrice;
    }

    @JsonProperty("originalPrice")
    public void setOriginalPrice(OriginalPrice originalPrice) {
        this.originalPrice = originalPrice;
    }

    @JsonProperty("discountPercentage")
    public String getDiscountPercentage() {
        return discountPercentage;
    }

    @JsonProperty("discountPercentage")
    public void setDiscountPercentage(String discountPercentage) {
        this.discountPercentage = discountPercentage;
    }

    @JsonProperty("discountAmount")
    public DiscountAmount getDiscountAmount() {
        return discountAmount;
    }

    @JsonProperty("discountAmount")
    public void setDiscountAmount(DiscountAmount discountAmount) {
        this.discountAmount = discountAmount;
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

}
