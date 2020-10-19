/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as msRest from "@azure/ms-rest-js";


export const PurposeTarget: msRest.CompositeMapper = {
  serializedName: "PurposeTarget",
  type: {
    name: "Composite",
    className: "PurposeTarget",
    modelProperties: {
      workspaceName: {
        serializedName: "workspaceName",
        type: {
          name: "String"
        }
      },
      brainName: {
        serializedName: "brainName",
        type: {
          name: "String"
        }
      },
      brainVersion: {
        serializedName: "brainVersion",
        type: {
          name: "Number"
        }
      },
      conceptName: {
        serializedName: "conceptName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Purpose: msRest.CompositeMapper = {
  serializedName: "Purpose",
  type: {
    name: "Composite",
    className: "Purpose",
    modelProperties: {
      action: {
        serializedName: "action",
        type: {
          name: "Enum",
          allowedValues: [
            "Inactive",
            "Debug",
            "Train",
            "Assess"
          ]
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "Composite",
          className: "PurposeTarget"
        }
      }
    }
  }
};

export const SimulatorContext: msRest.CompositeMapper = {
  serializedName: "SimulatorContext",
  type: {
    name: "Composite",
    className: "SimulatorContext",
    modelProperties: {
      deploymentMode: {
        serializedName: "deploymentMode",
        type: {
          name: "Enum",
          allowedValues: [
            "Unspecified",
            "Hosted",
            "Testing"
          ]
        }
      },
      deploymentDetails: {
        serializedName: "deploymentDetails",
        type: {
          name: "String"
        }
      },
      simulatorClientId: {
        serializedName: "simulatorClientId",
        type: {
          name: "String"
        }
      },
      collection: {
        serializedName: "collection",
        type: {
          name: "String"
        }
      },
      packageProperty: {
        serializedName: "package",
        type: {
          name: "String"
        }
      },
      purpose: {
        serializedName: "purpose",
        type: {
          name: "Composite",
          className: "Purpose"
        }
      }
    }
  }
};

export const SimulatorSessionSummary: msRest.CompositeMapper = {
  serializedName: "SimulatorSessionSummary",
  type: {
    name: "Composite",
    className: "SimulatorSessionSummary",
    modelProperties: {
      sessionId: {
        serializedName: "sessionId",
        type: {
          name: "String"
        }
      },
      sessionStatus: {
        serializedName: "sessionStatus",
        type: {
          name: "Enum",
          allowedValues: [
            "Deregistered",
            "Attachable",
            "Attached",
            "Detaching",
            "Rejected"
          ]
        }
      },
      simulatorName: {
        serializedName: "simulatorName",
        type: {
          name: "String"
        }
      },
      simulatorContext: {
        serializedName: "simulatorContext",
        type: {
          name: "Composite",
          className: "SimulatorContext"
        }
      }
    }
  }
};

export const ProblemDetails: msRest.CompositeMapper = {
  serializedName: "ProblemDetails",
  type: {
    name: "Composite",
    className: "ProblemDetails",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      },
      detail: {
        serializedName: "detail",
        type: {
          name: "String"
        }
      },
      instance: {
        serializedName: "instance",
        type: {
          name: "String"
        }
      },
      extensions: {
        readOnly: true,
        serializedName: "extensions",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Object"
            }
          }
        }
      }
    }
  }
};

export const SimulatorInterface: msRest.CompositeMapper = {
  serializedName: "SimulatorInterface",
  type: {
    name: "Composite",
    className: "SimulatorInterface",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      timeout: {
        serializedName: "timeout",
        type: {
          name: "Number"
        }
      },
      capabilities: {
        serializedName: "capabilities",
        type: {
          name: "Object"
        }
      },
      simulatorContext: {
        serializedName: "simulatorContext",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const SimulatorSessionMilestone: msRest.CompositeMapper = {
  serializedName: "SimulatorSessionMilestone",
  type: {
    name: "Composite",
    className: "SimulatorSessionMilestone",
    modelProperties: {
      firstTime: {
        serializedName: "firstTime",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const SimulatorSessionProgress: msRest.CompositeMapper = {
  serializedName: "SimulatorSessionProgress",
  type: {
    name: "Composite",
    className: "SimulatorSessionProgress",
    modelProperties: {
      attached: {
        serializedName: "attached",
        type: {
          name: "Composite",
          className: "SimulatorSessionMilestone"
        }
      },
      iterated: {
        serializedName: "iterated",
        type: {
          name: "Composite",
          className: "SimulatorSessionMilestone"
        }
      },
      finishedEpisode: {
        serializedName: "finishedEpisode",
        type: {
          name: "Composite",
          className: "SimulatorSessionMilestone"
        }
      }
    }
  }
};

export const SimulatorSessionResponse: msRest.CompositeMapper = {
  serializedName: "SimulatorSessionResponse",
  type: {
    name: "Composite",
    className: "SimulatorSessionResponse",
    modelProperties: {
      sessionId: {
        required: true,
        serializedName: "sessionId",
        type: {
          name: "String"
        }
      },
      sessionStatus: {
        serializedName: "sessionStatus",
        type: {
          name: "Enum",
          allowedValues: [
            "Deregistered",
            "Attachable",
            "Attached",
            "Detaching",
            "Rejected"
          ]
        }
      },
      sessionProgress: {
        serializedName: "sessionProgress",
        type: {
          name: "Composite",
          className: "SimulatorSessionProgress"
        }
      },
      interfaceProperty: {
        serializedName: "interface",
        type: {
          name: "Composite",
          className: "SimulatorInterface"
        }
      },
      simulatorContext: {
        serializedName: "simulatorContext",
        type: {
          name: "Composite",
          className: "SimulatorContext"
        }
      },
      registrationTime: {
        required: true,
        serializedName: "registrationTime",
        type: {
          name: "DateTime"
        }
      },
      lastSeenTime: {
        required: true,
        serializedName: "lastSeenTime",
        type: {
          name: "DateTime"
        }
      },
      lastIteratedTime: {
        required: true,
        serializedName: "lastIteratedTime",
        type: {
          name: "DateTime"
        }
      },
      iterationRate: {
        serializedName: "iterationRate",
        type: {
          name: "Number"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EpisodeStart: msRest.CompositeMapper = {
  serializedName: "EpisodeStart",
  type: {
    name: "Composite",
    className: "EpisodeStart",
    modelProperties: {
      config: {
        serializedName: "config",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const EpisodeStep: msRest.CompositeMapper = {
  serializedName: "EpisodeStep",
  type: {
    name: "Composite",
    className: "EpisodeStep",
    modelProperties: {
      action: {
        serializedName: "action",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const EpisodeFinish: msRest.CompositeMapper = {
  serializedName: "EpisodeFinish",
  type: {
    name: "Composite",
    className: "EpisodeFinish",
    modelProperties: {
      reason: {
        serializedName: "reason",
        type: {
          name: "Enum",
          allowedValues: [
            "Invalid",
            "Unspecified",
            "LessonChanged",
            "Terminal",
            "Interrupted"
          ]
        }
      }
    }
  }
};

export const Idle: msRest.CompositeMapper = {
  serializedName: "Idle",
  type: {
    name: "Composite",
    className: "Idle",
    modelProperties: {
      callbackTime: {
        serializedName: "callbackTime",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Unregister: msRest.CompositeMapper = {
  serializedName: "Unregister",
  type: {
    name: "Composite",
    className: "Unregister",
    modelProperties: {
      reason: {
        serializedName: "reason",
        type: {
          name: "Enum",
          allowedValues: [
            "Unspecified",
            "Finished",
            "Error",
            "NotFound"
          ]
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Event: msRest.CompositeMapper = {
  serializedName: "Event",
  type: {
    name: "Composite",
    className: "Event",
    modelProperties: {
      type: {
        required: true,
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "Unspecified",
            "EpisodeStart",
            "EpisodeStep",
            "EpisodeFinish",
            "Idle",
            "Unregister"
          ]
        }
      },
      sessionId: {
        required: true,
        serializedName: "sessionId",
        type: {
          name: "String"
        }
      },
      sequenceId: {
        required: true,
        serializedName: "sequenceId",
        type: {
          name: "Number"
        }
      },
      episodeStart: {
        serializedName: "episodeStart",
        type: {
          name: "Composite",
          className: "EpisodeStart"
        }
      },
      episodeStep: {
        serializedName: "episodeStep",
        type: {
          name: "Composite",
          className: "EpisodeStep"
        }
      },
      episodeFinish: {
        serializedName: "episodeFinish",
        type: {
          name: "Composite",
          className: "EpisodeFinish"
        }
      },
      idle: {
        serializedName: "idle",
        type: {
          name: "Composite",
          className: "Idle"
        }
      },
      unregister: {
        serializedName: "unregister",
        type: {
          name: "Composite",
          className: "Unregister"
        }
      }
    }
  }
};

export const SimulatorState: msRest.CompositeMapper = {
  serializedName: "SimulatorState",
  type: {
    name: "Composite",
    className: "SimulatorState",
    modelProperties: {
      sequenceId: {
        required: true,
        serializedName: "sequenceId",
        type: {
          name: "Number"
        }
      },
      state: {
        serializedName: "state",
        type: {
          name: "Object"
        }
      },
      halted: {
        serializedName: "halted",
        type: {
          name: "Boolean"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "String"
        }
      }
    }
  }
};
