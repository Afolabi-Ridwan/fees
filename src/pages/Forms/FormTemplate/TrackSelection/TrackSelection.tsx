import { useLocation } from "react-router"
import { Crown, Puzzle } from "lucide-react";
import { formParams } from "../../../../types/types";



const TrackSelection = ({setFormData, formData, }: formParams) => {

    const location = useLocation()
    const recommendation = location.state?.recommendation

    return (
        <div className="w-full bg-registrationForm border border-inputBorder p-8 max-sm:px-4 rounded-xl mt-8">
            <div>
                <h3 className="text-[24px] font-medium">Select a track</h3>
                <p className="mb-6 text-[14px] text-gray">Not sure what track is right for you? <span className="text-deepBlue underline cursor-pointer">Click here</span> to find out</p>
                <div className="grid sm:grid-cols-2 gap-4">
                    {[
                        { label: "Foundational Track", price: "₦100,000", value: "Foundational", recommended: true },
                        { label: "Advanced Track", price: "₦200,000", value: "Advanced" }
                    ].map((track) => (
                        <button
                            key={track.value}
                            type="button"
                            className={`border border-[1.5px] rounded-md p-4 text-center cursor-pointer hover:border-blueOnAccordion ${formData.track?.value === track.value ? "border-blueOnAccordion" : "border-gray-300"
                                }`}
                            onClick={() => setFormData({ ...formData, track: { value: track.value, price: track.price } })}
                        >
                            <div className="flex justify-between">
                                <span className={`text-[24px] ${formData.track?.value === track.value && "text-deepBlue"}`}>
                                    {track.value === "Foundational" ?
                                        <Puzzle fill={`${formData.track?.value === track.value ? "#2d3d70" : "transparent"}`} />
                                        : <Crown fill={`${formData.track?.value === track.value ? "#2d3d70" : "transparent"}`} />}
                                </span>
                                {recommendation && <p className="text-[12px] text-slateBlue font-[500]">{track.recommended && "Recommended"}</p>}
                            </div>
                            <div className="flex items-center justify-between mt-6">
                                <span className="block font-medium text-[18px]">{track.label}</span>
                                <span className="block text-[12px] text-gray">{track.price}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrackSelection
