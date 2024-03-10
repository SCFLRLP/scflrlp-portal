function checkInfractionStep() {
    var staffId = document.getElementById('staffId').value;
    var steps = {
      // Provide infraction steps for staff IDs here
      '710450': 0,
      '11079': 0,
      '11045': 2,
      'test0': 0,
      'test1': 1,
      'test2': 2,
      'test3': 3
      // Add more as needed
    };

    var infractionStep = steps[staffId];

    if (infractionStep !== undefined) {
      displayInfractionStep(infractionStep);
    } else {
      displayUnknownInfraction();
    }
  }

  function displayInfractionStep(infractionStep) {
    var resultDiv = document.getElementById('infractionResult');
    resultDiv.innerHTML = '';

    switch (infractionStep) {
      case 0:
        resultDiv.innerHTML = '<div class="alert alert-success" role="alert"><h4 class="alert-heading">Infraction Level 0</h4><p>You are doing great in the SCFL Staff Team! You are eligible for a promotion!</p><hr></div>';
        break;
      case 1:
        resultDiv.innerHTML = '<div class="alert alert-warning" role="alert"><h4 class="alert-heading">Infraction Level 1</h4><p>You have been infracted, and this may result in moderation action, you are eligible with supervision for a promotion.</p><hr></div>';
        break;
      case 2:
        resultDiv.innerHTML = '<div class="alert alert-warning" role="alert"><h4 class="alert-heading">Infraction Level 2</h4><p>You have been infracted, and this may result in moderation action, you will be supervised deeply within promotion.</p><hr></div>';
        break;
      case 3:
        resultDiv.innerHTML = '<div class="alert alert-danger" role="alert"><h4 class="alert-heading">Infraction Level 3</h4><p>Your account permissions will be suspended, and further action will be decided by moderation, you are not eligible for a promotion.</p><hr></div>';
        break;
      default:
        displayUnknownInfraction();
        break;
    }
  }

  function displayUnknownInfraction() {
    var resultDiv = document.getElementById('infractionResult');
    resultDiv.innerHTML = '<div class="alert alert-info" role="alert"><h4 class="alert-heading">Unknown Infraction Level</h4><p>No infraction step found for the given staff ID.</p><hr></div>';
  }
