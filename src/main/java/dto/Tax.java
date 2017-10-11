
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
    "taxJurisdiction",
    "taxType",
    "taxPercentage",
    "shippingAndHandlingTaxed",
    "includedInPrice"
})
public class Tax {

    @JsonProperty("taxJurisdiction")
    private TaxJurisdiction taxJurisdiction;
    @JsonProperty("taxType")
    private String taxType;
    @JsonProperty("taxPercentage")
    private String taxPercentage;
    @JsonProperty("shippingAndHandlingTaxed")
    private Boolean shippingAndHandlingTaxed;
    @JsonProperty("includedInPrice")
    private Boolean includedInPrice;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("taxJurisdiction")
    public TaxJurisdiction getTaxJurisdiction() {
        return taxJurisdiction;
    }

    @JsonProperty("taxJurisdiction")
    public void setTaxJurisdiction(TaxJurisdiction taxJurisdiction) {
        this.taxJurisdiction = taxJurisdiction;
    }

    @JsonProperty("taxType")
    public String getTaxType() {
        return taxType;
    }

    @JsonProperty("taxType")
    public void setTaxType(String taxType) {
        this.taxType = taxType;
    }

    @JsonProperty("taxPercentage")
    public String getTaxPercentage() {
        return taxPercentage;
    }

    @JsonProperty("taxPercentage")
    public void setTaxPercentage(String taxPercentage) {
        this.taxPercentage = taxPercentage;
    }

    @JsonProperty("shippingAndHandlingTaxed")
    public Boolean getShippingAndHandlingTaxed() {
        return shippingAndHandlingTaxed;
    }

    @JsonProperty("shippingAndHandlingTaxed")
    public void setShippingAndHandlingTaxed(Boolean shippingAndHandlingTaxed) {
        this.shippingAndHandlingTaxed = shippingAndHandlingTaxed;
    }

    @JsonProperty("includedInPrice")
    public Boolean getIncludedInPrice() {
        return includedInPrice;
    }

    @JsonProperty("includedInPrice")
    public void setIncludedInPrice(Boolean includedInPrice) {
        this.includedInPrice = includedInPrice;
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
