// <auto-generated>
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace Microsoft.Bonsai.SimulatorApi.Models
{
    using Newtonsoft.Json;
    using System.Linq;

    /// <summary>
    /// EpisodeStep event for stepping inthe simulation. this is sent when
    /// there is an ongoing active episode.
    /// </summary>
    public partial class EpisodeStep
    {
        /// <summary>
        /// Initializes a new instance of the EpisodeStep class.
        /// </summary>
        public EpisodeStep()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the EpisodeStep class.
        /// </summary>
        /// <param name="action">action decided by RL agent.null use this
        /// action to advance from current state of simulator.</param>
        public EpisodeStep(object action = default(object))
        {
            Action = action;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// Gets or sets action decided by RL agent.null use this action to
        /// advance from current state of simulator.
        /// </summary>
        [JsonProperty(PropertyName = "action")]
        public object Action { get; set; }

    }
}
