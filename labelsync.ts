import { labelsync, repo } from "label-sync";

/* Repository */
import { prisma } from "./repos/prisma";
import { github } from "./repos/github";

/* Config */
labelsync({
  repos: {
    /* Check presets in the repos folder. */
    // prisma,
    // github,
    /* Personalized repositories */
    "github.com/aeneasr/label-sync-test-1": repo({
      config: {
        removeUnconfiguredLabels: false,
      },
      labels: [],
    }),
    "github.com/aeneasr/label-sync-test-2": repo({
      config: {
        removeUnconfiguredLabels: false,
      },
      labels: [],
    }),
  },
});
