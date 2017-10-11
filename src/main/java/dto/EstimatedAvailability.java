
package dto;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "deliveryOptions",
    "availabilityThresholdType",
    "availabilityThreshold",
    "estimatedAvailabilityStatus",
    "estimatedSoldQuantity"
})
public class EstimatedAvailability {

    @JsonProperty("deliveryOptions")
    private List<String> deliveryOptions = null;
    @JsonProperty("availabilityThresholdType")
    private String availabilityThresholdType;
    @JsonProperty("availabilityThreshold")
    private Integer availabilityThreshold;
    @JsonProperty("estimatedAvailabilityStatus")
    private String estimatedAvailabilityStatus;
    @JsonProperty("estimatedSoldQuantity")
    private Integer estimatedSoldQuantity;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("deliveryOptions")
    public List<String> getDeliveryOptions() {
        return deliveryOptions;
    }

    @JsonProperty("deliveryOptions")
    public void setDeliveryOptions(List<String> deliveryOptions) {
        this.deliveryOptions = deliveryOptions;
    }

    @JsonProperty("availabilityThresholdType")
    public String getAvailabilityThresholdType() {
        return availabilityThresholdType;
    }

    @JsonProperty("availabilityThresholdType")
    public void setAvailabilityThresholdType(String availabilityThresholdType) {
        this.availabilityThresholdType = availabilityThresholdType;
    }

    @JsonProperty("availabilityThreshold")
    public Integer getAvailabilityThreshold() {
        return availabilityThreshold;
    }

    @JsonProperty("availabilityThreshold")
    public void setAvailabilityThreshold(Integer availabilityThreshold) {
        this.availabilityThreshold = availabilityThreshold;
    }

    @JsonProperty("estimatedAvailabilityStatus")
    public String getEstimatedAvailabilityStatus() {
        return estimatedAvailabilityStatus;
    }

    @JsonProperty("estimatedAvailabilityStatus")
    public void setEstimatedAvailabilityStatus(String estimatedAvailabilityStatus) {
        this.estimatedAvailabilityStatus = estimatedAvailabilityStatus;
    }

    @JsonProperty("estimatedSoldQuantity")
    public Integer getEstimatedSoldQuantity() {
        return estimatedSoldQuantity;
    }

    @JsonProperty("estimatedSoldQuantity")
    public void setEstimatedSoldQuantity(Integer estimatedSoldQuantity) {
        this.estimatedSoldQuantity = estimatedSoldQuantity;
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
