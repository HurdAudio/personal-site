(function() {
  'use strict';

  // Initialize Web Audio mixer paths
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var masterGainNode = audioCtx.createGain();
  var masterVolume = 0.01;
  masterGainNode.gain.value = masterVolume;
  masterGainNode.connect(audioCtx.destination);
  var masterCompressorNode = audioCtx.createDynamicsCompressor();
  masterCompressorNode.connect(masterGainNode);
  var masterFilterNode = audioCtx.createBiquadFilter();
  masterFilterNode.type = "lowpass";
  masterFilterNode.frequency.value = 2000;
  masterFilterNode.connect(masterCompressorNode);
  var masterMergerNode = audioCtx.createChannelMerger(8);
  masterMergerNode.connect(masterFilterNode);
  var subMergerNode1 = audioCtx.createChannelMerger(8);
  subMergerNode1.connect(masterMergerNode, 0, 0);
  var subMergerNode2 = audioCtx.createChannelMerger(8);
  subMergerNode2.connect(masterMergerNode, 0, 1);
  var subMergerNode3 = audioCtx.createChannelMerger(8);
  subMergerNode3.connect(masterMergerNode, 0, 2);
  var subMergerNode4 = audioCtx.createChannelMerger(8);
  subMergerNode4.connect(masterMergerNode, 0, 3);
  var subMergerNode5 = audioCtx.createChannelMerger(8);
  subMergerNode5.connect(masterMergerNode, 0, 4);
  var subMergerNode6 = audioCtx.createChannelMerger(8);
  subMergerNode6.connect(masterMergerNode, 0, 5);
  var subMergerNode7 = audioCtx.createChannelMerger(8);
  subMergerNode7.connect(masterMergerNode, 0, 6);
  var subMergerNode8 = audioCtx.createChannelMerger(8);
  subMergerNode8.connect(masterMergerNode, 0, 7);

  var inputManager = [];
  var inputIndex = -1;

  var justPartial = 0;
  var equalPartial = 1;
  var firstPartial = 0;
  var secondPartial = 1;
  var thirdPartial = 2;
  var fourthPartial = 3;
  var fifthPartial = 4;
  var sixthPartial = 5;
  var seventhPartial = 6;
  var eighthPartial = 7;
  var ninthPartial = 8;
  var tenthPartial = 9;
  var eleventhPartial = 10;
  var twelfthPartial = 11;
  var thirteenthPartial = 12;
  var fourteenthPartial = 13;
  var fifteenthPartial = 14;
  var sixteenthPartial = 15;


  var partialOscillators = [];
  partialOscillators[firstPartial] = [];
  partialOscillators[firstPartial][justPartial] = {};
  partialOscillators[firstPartial][equalPartial] = {};
  partialOscillators[secondPartial] = [];
  partialOscillators[secondPartial][justPartial] = {};
  partialOscillators[secondPartial][equalPartial] = {};
  partialOscillators[thirdPartial] = [];
  partialOscillators[thirdPartial][justPartial] = {};
  partialOscillators[thirdPartial][equalPartial] = {};
  partialOscillators[fourthPartial] = [];
  partialOscillators[fourthPartial][justPartial] = {};
  partialOscillators[fourthPartial][equalPartial] = {};
  partialOscillators[fifthPartial] = [];
  partialOscillators[fifthPartial][justPartial] = {};
  partialOscillators[fifthPartial][equalPartial] = {};
  partialOscillators[sixthPartial] = [];
  partialOscillators[sixthPartial][justPartial] = {};
  partialOscillators[sixthPartial][equalPartial] = {};
  partialOscillators[seventhPartial] = [];
  partialOscillators[seventhPartial][justPartial] = {};
  partialOscillators[seventhPartial][equalPartial] = {};
  partialOscillators[eighthPartial] = [];
  partialOscillators[eighthPartial][justPartial] = {};
  partialOscillators[eighthPartial][equalPartial] = {};
  partialOscillators[ninthPartial] = [];
  partialOscillators[ninthPartial][justPartial] = {};
  partialOscillators[ninthPartial][equalPartial] = {};
  partialOscillators[tenthPartial] = [];
  partialOscillators[tenthPartial][justPartial] = {};
  partialOscillators[tenthPartial][equalPartial] = {};
  partialOscillators[eleventhPartial] = [];
  partialOscillators[eleventhPartial][justPartial] = {};
  partialOscillators[eleventhPartial][equalPartial] = {};
  partialOscillators[twelfthPartial] = [];
  partialOscillators[twelfthPartial][justPartial] = {};
  partialOscillators[twelfthPartial][equalPartial] = {};
  partialOscillators[thirteenthPartial] = [];
  partialOscillators[thirteenthPartial][justPartial] = {};
  partialOscillators[thirteenthPartial][equalPartial] = {};
  partialOscillators[fourteenthPartial] = [];
  partialOscillators[fourteenthPartial][justPartial] = {};
  partialOscillators[fourteenthPartial][equalPartial] = {};
  partialOscillators[fifteenthPartial] = [];
  partialOscillators[fifteenthPartial][justPartial] = {};
  partialOscillators[fifteenthPartial][equalPartial] = {};
  partialOscillators[sixteenthPartial] = [];
  partialOscillators[sixteenthPartial][justPartial] = {};
  partialOscillators[sixteenthPartial][equalPartial] = {};

  function hookUpMergerNodes () {

    for (let i = 0; i < 8; i++) {

      inputManager[i] = [];
      inputManager[i][0] = subMergerNode1;
      inputManager[i][1] = i;

      inputManager[i + 8] = [];
      inputManager[i + 8][0] = subMergerNode2;
      inputManager[i + 8][1] = i;

      inputManager[i + 16] = [];
      inputManager[i + 16][0] = subMergerNode3;
      inputManager[i + 16][1] = i;

      inputManager[i + 24] = [];
      inputManager[i + 24][0] = subMergerNode4;
      inputManager[i + 24][1] = i;

      inputManager[i + 32] = [];
      inputManager[i + 32][0] = subMergerNode5;
      inputManager[i + 32][1] = i;

      inputManager[i + 40] = [];
      inputManager[i + 40][0] = subMergerNode6;
      inputManager[i + 40][1] = i;

      inputManager[i + 48] = [];
      inputManager[i + 48][0] = subMergerNode7;
      inputManager[i + 48][1] = i;

      inputManager[i + 56] = [];
      inputManager[i + 56][0] = subMergerNode8;
      inputManager[i + 56][1] = i;
    }

  }

  function getNextInput () {
    ++inputIndex;
    if (inputIndex === 64) {
      inputIndex = 0;
    }
    return inputIndex;
  }

  function allocateOscillator () {
    var newOscillator = audioCtx.createOscillator();

    return (newOscillator);

  }

  function allocatePanNode () {
    var panNode = audioCtx.createStereoPanner();

    return (panNode);
  }

  function allocateGainNode () {
    var newGainNode = audioCtx.createGain();

    return (newGainNode);
  }

  function initNewOscillator (frequency) {
    var osc = allocateOscillator();
    osc.type = 'sine';
    osc.frequency.value = frequency;

    return osc;
  }

  function initNewPan () {
    var newPan = allocatePanNode();
    newPan.pan.value = 0;
    return (newPan);
  }

  function initNewGain () {
    var newGain = allocateGainNode();
    newGain.gain.value = 0.0;
    return (newGain);
  }

  function initSoundingObject (oscNode, panNode, gainNode, name) {
    var returnObject = {};

    returnObject.hertz = oscNode.frequency.value;
    returnObject.osc = oscNode;
    returnObject.pan = panNode;
    returnObject.gain = gainNode;
    returnObject.name = name;
    returnObject.gainvalue = gainNode.gain.value;
    returnObject.panvalue = panNode.pan.value;
    returnObject.waveform = oscNode.type.value;

    return returnObject;

  }


  angular.module('app')
    .component('harmonictheoryintroduction', {
      controller: HarmonicTheoryIntroductionController,
      templateUrl: '/js/harmonictheoryintroduction/harmonictheoryintroduction.template.html'
    });

    HarmonicTheoryIntroductionController.$inject = ['$http', '$state', '$stateParams'];

    function HarmonicTheoryIntroductionController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;



      function renderEflat3() {
        var VF = Vex.Flow;

        // Create an SVG renderer and attach it to the DIV element named "boo".
        var div = document.getElementById("eflat3");
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(250, 150);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        // Create a stave of width 400 at position 10, 40 on the canvas.
        var stave = new VF.Stave(2, 2, 100);

        // Add a clef and time signature.
        stave.addClef("bass");




        var notes = [
          new VF.StaveNote({clef: "bass", keys: ["eb/3"], duration: "q", auto_stem: false, stem_direction: -1 }).
              addAccidental(0, new VF.Accidental("b"))
        ];

        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();

        // Create a voice in 4/4 and add above notes
        var voice = new VF.Voice({num_beats: 1,  beat_value: 1});
        voice.addTickables(notes);

        // Format and justify the notes to 400 pixels.
        VF.Formatter.FormatAndDraw(context, stave, notes);

        // Render voice
        voice.draw(context, stave);
      }

      function renderEflat4() {
        var VF = Vex.Flow;

        // Create an SVG renderer and attach it to the DIV element named "boo".
        var div = document.getElementById("eflat4");
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(250, 150);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        // Create a stave of width 400 at position 10, 40 on the canvas.
        var stave = new VF.Stave(2, 2, 100);

        // Add a clef and time signature.
        stave.addClef("treble");




        var notes = [
          new VF.StaveNote({clef: "treble", keys: ["eb/4"], duration: "q", auto_stem: false, stem_direction: 1 }).
              addAccidental(0, new VF.Accidental("b"))
        ];

        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();

        // Create a voice in 4/4 and add above notes
        var voice = new VF.Voice({num_beats: 1,  beat_value: 1});
        voice.addTickables(notes);

        // Format and justify the notes to 400 pixels.
        VF.Formatter.FormatAndDraw(context, stave, notes);

        // Render voice
        voice.draw(context, stave);
      }

      function renderEflat3WithHertz() {
        var VF = Vex.Flow;

        // Create an SVG renderer and attach it to the DIV element named "boo".
        var div = document.getElementById("eflat3WithHertz");
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(250, 85);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        // Create a stave of width 400 at position 10, 40 on the canvas.
        var stave = new VF.Stave(2, 2, 100);

        // Add a clef and time signature.
        stave.addClef("bass");




        var notes = [
          new VF.StaveNote({clef: "bass", keys: ["eb/3"], duration: "q", auto_stem: false, stem_direction: -1 }).
              addAccidental(0, new VF.Accidental("b"))
        ];

        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();

        // Create a voice in 4/4 and add above notes
        var voice = new VF.Voice({num_beats: 1,  beat_value: 1});
        voice.addTickables(notes);

        // Format and justify the notes to 400 pixels.
        VF.Formatter.FormatAndDraw(context, stave, notes);

        // Render voice
        voice.draw(context, stave);
      }

      function renderEflat4WithHertz() {
        var VF = Vex.Flow;

        // Create an SVG renderer and attach it to the DIV element named "boo".
        var div = document.getElementById("eflat4WithHertz");
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(250, 110);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        // Create a stave of width 400 at position 10, 40 on the canvas.
        var stave = new VF.Stave(2, 2, 100);

        // Add a clef and time signature.
        stave.addClef("treble");




        var notes = [
          new VF.StaveNote({clef: "treble", keys: ["eb/4"], duration: "q", auto_stem: false, stem_direction: 1 }).
              addAccidental(0, new VF.Accidental("b"))
        ];

        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();

        // Create a voice in 4/4 and add above notes
        var voice = new VF.Voice({num_beats: 1,  beat_value: 1});
        voice.addTickables(notes);

        // Format and justify the notes to 400 pixels.
        VF.Formatter.FormatAndDraw(context, stave, notes);

        // Render voice
        voice.draw(context, stave);
      }

      function renderEflat3WithRatioAndCents() {
        var VF = Vex.Flow;

        // Create an SVG renderer and attach it to the DIV element named "boo".
        var div = document.getElementById("eflat3WithRatioAndCents");
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(250, 85);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        // Create a stave of width 400 at position 10, 40 on the canvas.
        var stave = new VF.Stave(2, 2, 100);

        // Add a clef and time signature.
        stave.addClef("bass");




        var notes = [
          new VF.StaveNote({clef: "bass", keys: ["eb/3"], duration: "q", auto_stem: false, stem_direction: -1 }).
              addAccidental(0, new VF.Accidental("b"))
        ];

        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();

        // Create a voice in 4/4 and add above notes
        var voice = new VF.Voice({num_beats: 1,  beat_value: 1});
        voice.addTickables(notes);

        // Format and justify the notes to 400 pixels.
        VF.Formatter.FormatAndDraw(context, stave, notes);

        // Render voice
        voice.draw(context, stave);
      }

      function renderEflat4WithRatioAndCents() {
        var VF = Vex.Flow;

        // Create an SVG renderer and attach it to the DIV element named "boo".
        var div = document.getElementById("eflat4WithRatioAndCents");
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(250, 110);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        // Create a stave of width 400 at position 10, 40 on the canvas.
        var stave = new VF.Stave(2, 2, 100);

        // Add a clef and time signature.
        stave.addClef("treble");




        var notes = [
          new VF.StaveNote({clef: "treble", keys: ["eb/4"], duration: "q", auto_stem: false, stem_direction: 1 }).
              addAccidental(0, new VF.Accidental("b"))
        ];

        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();

        // Create a voice in 4/4 and add above notes
        var voice = new VF.Voice({num_beats: 1,  beat_value: 1});
        voice.addTickables(notes);

        // Format and justify the notes to 400 pixels.
        VF.Formatter.FormatAndDraw(context, stave, notes);

        // Render voice
        voice.draw(context, stave);
      }

      function renderOvertoneSeries() {
        var VF = Vex.Flow;

        // Create an SVG renderer and attach it to the DIV element named "boo".
        var div = document.getElementById("eFlatHarmonicSeries");
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(900, 300);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        // Create a stave of width 400 at position 10, 40 on the canvas.
        var staveTreble = new VF.Stave(10, 40, 800);
        var staveBass = new VF.Stave(10, 160, 800);

        // Add a clef and time signature.
        staveTreble.addClef("treble");
        staveBass.addClef("bass");

        // Connect it to the rendering context and draw!
        staveTreble.setContext(context).draw();
        staveBass.setContext(context).draw();

        // Create the notes
        var notes = [
          // A quarter-note C.
          new VF.GhostNote({ keys: ["b/4"], duration: "hr" }),

          new VF.GhostNote({ keys: ["b/4"], duration: "qr" }),

          new VF.StaveNote({ keys: ["e/4"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ keys: ["g/4"], duration: "q" }),

          new VF.StaveNote({ keys: ["b/4"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),


          new VF.StaveNote({ keys: ["d/5"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ keys: ["e/5"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ keys: ["f/5"], duration: "q", stem_direction: -1 }),

          new VF.StaveNote({ keys: ["g/5"], duration: "q", stem_direction: -1 }),

          new VF.StaveNote({ keys: ["a/5"], duration: "q", stem_direction: -1 }),

          new VF.StaveNote({ keys: ["b/5"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ keys: ["c/6"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ keys: ["d/6"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ keys: ["d/6"], duration: "q", stem_direction: -1}).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ keys: ["e/6"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b"))
        ];
        var notes2 = [

          new VF.StaveNote({ clef: "bass", keys: ["e/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["e/3"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["b/3"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),

          new VF.GhostNote({ keys: ["b/4"], duration: "qr" }),

          new VF.GhostNote({ keys: ["b/4"], duration: "wr" }),

          new VF.GhostNote({ keys: ["b/4"], duration: "wr" }),

          new VF.GhostNote({ keys: ["b/4"], duration: "hr" }),

          new VF.GhostNote({ keys: ["b/4"], duration: "hr" })
        ]

        var voice = new VF.Voice({num_beats: 16,  beat_value: 4, resolution:Vex.Flow.RESOLUTION});
        var voice2 = new VF.Voice({num_beats: 16, beat_value: 4, resolution:Vex.Flow.RESOLUTION});
        voice.addTickables(notes).setStave(staveTreble);
        voice2.addTickables(notes2).setStave(staveBass);

        var startX = Math.max(staveTreble.getNoteStartX(), staveBass.getNoteStartX());
        staveTreble.setNoteStartX(startX);
        staveBass.setNoteStartX(startX);

        // Format and justify the notes to 400 pixels.
        var formatter = new VF.Formatter().joinVoices([voice]).joinVoices([voice2]).format([voice, voice2], 800 - (startX));
        // var formatter2 = new VF.Formatter().joinVoices([voice2]).format([voice2], 400);
        //var formatter = new VF.Formatter();
        //formatter.joinVoices([voice]);
        //formatter.joinVoices([voice2]);
        //formatter.format([voice1, voice2], 400 - (startX - staveTreble));

        // Render voice
        voice.draw(context, staveTreble);
        voice2.draw(context, staveBass);
      }

      function startSoundingOscillators (freq, name, partial, intonation) {

        var oscillator = initNewOscillator(freq);
        var panner = initNewPan();
        var gain = initNewGain();
        var inputHandle = getNextInput();
        partialOscillators[partial][intonation] = initSoundingObject(oscillator, panner, gain, name);
        if (inputHandle < 16) {
          gain.connect(subMergerNode1, 0, 0);
        } else {
          if (inputHandle < 32) {
            gain.connect(subMergerNode2, 0, 0);
          } else {
            gain.connect(subMergerNode3, 0, 0);
          }
        }
        // gain.connect(inputManager[inputHandle][0], 0, 0);
        panner.connect(gain);
        oscillator.connect(panner);
        oscillator.start();
      }

      function initializeSoundingOscillators() {

        var frequency = 77.781745930520228;
        var name = "partial1-Just";
        var partial = firstPartial;
        var intonation = justPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        name = "partial1-Equal";
        intonation = equalPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 155.563491861040455;
        name = "partial2-Just";
        partial = secondPartial;
        intonation = justPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        name = "partial2-Equal";
        intonation = equalPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 233.345237791560683;
        name = "partial3-Just";
        partial = thirdPartial;
        intonation = justPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 233.081880759044958;
        name = "partial3-Equal";
        intonation = equalPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 311.126983722080911;
        name = "partial4-Just";
        partial = fourthPartial;
        intonation = justPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        name = "partial4-Equal";
        intonation = equalPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 388.908729652601138;
        name = "partial5-Just";
        partial = fifthPartial;
        intonation = justPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 391.995435981749294;
        name = "partial5-Equal";
        intonation = equalPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 466.690475583121366;
        name = "partial6-Just";
        partial = sixthPartial;
        intonation = justPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 466.163761518089916;
        name = "partial6-Equal";
        intonation = equalPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 544.472221513641594;
        name = "partial7-Just";
        partial = seventhPartial;
        intonation = justPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 554.365261953744192;
        name = "partial7-Equal";
        intonation = equalPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 622.253967444161821;
        name = "partial8-Just";
        partial = eighthPartial;
        intonation = justPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        name = "partial8-Equal";
        intonation = equalPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 700.035713374682049;
        name = "partial9-Just";
        partial = ninthPartial;
        intonation = justPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 698.456462866007769;
        name = "partial9-Equal";
        intonation = equalPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 777.817459305202277;
        name = "partial10-Just";
        partial = tenthPartial;
        intonation = justPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 783.990871963498588;
        name = "partial10-Equal";
        intonation = equalPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 855.599205235722505;
        name = "partial11-Just";
        partial = eleventhPartial;
        intonation = justPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 880.00;
        name = "partial11-Equal";
        intonation = equalPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 933.380951166242732;
        name = "partial12-Just";
        partial = twelfthPartial;
        intonation = justPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 932.327523036179833;
        name = "partial12-Equal";
        intonation = equalPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 1011.16269709676296;
        name = "partial13-Just";
        partial = thirteenthPartial;
        intonation = justPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 987.766602512248224;
        name = "partial13-Equal";
        intonation = equalPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 1088.944443027283188;
        name = "partial14-Just";
        partial = fourteenthPartial;
        intonation = justPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 1108.730523907488385;
        name = "partial14-Equal";
        intonation = equalPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 1166.726188957803415;
        name = "partial15-Just";
        partial = fifteenthPartial;
        intonation = justPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 1174.659071669630241;
        name = "partial15-Equal";
        intonation = equalPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        frequency = 1244.507934888323643;
        name = "partial16-Just";
        partial = sixteenthPartial;
        intonation = justPartial;
        startSoundingOscillators(frequency, name, partial, intonation);

        name = "partial16-Equal";
        intonation = equalPartial;
        startSoundingOscillators(frequency, name, partial, intonation);
      }

      function onInit() {
        console.log("Introduction to harmonic theory");
        var masterVolumeControl = document.getElementById('volumeControl');
        var masterVolumeAmount = document.getElementById('masterGain');
        var firstExample = document.getElementById('playEflat3');
        var secondExample = document.getElementById('playEflat4');
        var thirdExample = document.getElementById('playEflat4WithHertz');
        var fourthExample = document.getElementById('playEflat3WithHertz');
        var fifthExample = document.getElementById('playEflat4WithRatioAndCents');
        var sixthExample = document.getElementById('playEflat3WithRatioAndCents');
        var seventhExample = document.getElementById('playEflat2HarmonicSeries');
        var seriesOn = false;
        var justPartial1 = document.getElementById('firstPartialJust');
        var justPartial1Gain = document.getElementById('firstJustPartialGain');
        var equalPartial1 = document.getElementById('firstPartialEqual');
        var equalPartial1Gain = document.getElementById('firstEqualPartialGain');
        var justPartial2 = document.getElementById('secondPartialJust');
        var justPartial2Gain = document.getElementById('secondJustPartialGain');
        var equalPartial2 = document.getElementById('secondPartialEqual');
        var equalPartial2Gain = document.getElementById('secondEqualPartialGain');
        var justPartial3 = document.getElementById('thirdPartialJust');
        var justPartial3Gain = document.getElementById('thirdJustPartialGain');
        var equalPartial3 = document.getElementById('thirdPartialEqual');
        var equalPartial3Gain = document.getElementById('thirdEqualPartialGain');
        var justPartial4 = document.getElementById('fourthPartialJust');
        var justPartial4Gain = document.getElementById('fourthJustPartialGain');
        var equalPartial4 = document.getElementById('fourthPartialEqual');
        var equalPartial4Gain = document.getElementById('fourthEqualPartialGain');
        var justPartial5 = document.getElementById('fifthPartialJust');
        var justPartial5Gain = document.getElementById('fifthJustPartialGain');
        var equalPartial5 = document.getElementById('fifthPartialEqual');
        var equalPartial5Gain = document.getElementById('fifthEqualPartialGain');
        var justPartial6 = document.getElementById('sixthPartialJust');
        var justPartial6Gain = document.getElementById('sixthJustPartialGain');
        var equalPartial6 = document.getElementById('sixthPartialEqual');
        var equalPartial6Gain = document.getElementById('sixthEqualPartialGain');
        var justPartial7 = document.getElementById('seventhPartialJust');
        var justPartial7Gain = document.getElementById('seventhJustPartialGain');
        var equalPartial7 = document.getElementById('seventhPartialEqual');
        var equalPartial7Gain = document.getElementById('seventhEqualPartialGain');
        var justPartial8 = document.getElementById('eighthPartialJust');
        var justPartial8Gain = document.getElementById('eighthJustPartialGain');
        var equalPartial8 = document.getElementById('eighthPartialEqual');
        var equalPartial8Gain = document.getElementById('eighthEqualPartialGain');
        var justPartial9 = document.getElementById('ninthPartialJust');
        var justPartial9Gain = document.getElementById('ninthJustPartialGain');
        var equalPartial9 = document.getElementById('ninthPartialEqual');
        var equalPartial9Gain = document.getElementById('ninthEqualPartialGain');
        var justPartial10 = document.getElementById('tenthPartialJust');
        var justPartial10Gain = document.getElementById('tenthJustPartialGain');
        var equalPartial10 = document.getElementById('tenthPartialEqual');
        var equalPartial10Gain = document.getElementById('tenthEqualPartialGain');
        var justPartial11 = document.getElementById('eleventhPartialJust');
        var justPartial11Gain = document.getElementById('eleventhJustPartialGain');
        var equalPartial11 = document.getElementById('eleventhPartialEqual');
        var equalPartial11Gain = document.getElementById('eleventhEqualPartialGain');
        var justPartial12 = document.getElementById('twelfthPartialJust');
        var justPartial12Gain = document.getElementById('twelfthJustPartialGain');
        var equalPartial12 = document.getElementById('twelfthPartialEqual');
        var equalPartial12Gain = document.getElementById('twelfthEqualPartialGain');
        var justPartial13 = document.getElementById('thirteenthPartialJust');
        var justPartial13Gain = document.getElementById('thirteenthJustPartialGain');
        var equalPartial13 = document.getElementById('thirteenthPartialEqual');
        var equalPartial13Gain = document.getElementById('thirteenthEqualPartialGain');
        var justPartial14 = document.getElementById('fourteenthPartialJust');
        var justPartial14Gain = document.getElementById('fourteenthJustPartialGain');
        var equalPartial14 = document.getElementById('fourteenthPartialEqual');
        var equalPartial14Gain = document.getElementById('fourteenthEqualPartialGain');
        var justPartial15 = document.getElementById('fifteenthPartialJust');
        var justPartial15Gain = document.getElementById('fifteenthJustPartialGain');
        var equalPartial15 = document.getElementById('fifteenthPartialEqual');
        var equalPartial15Gain = document.getElementById('fifteenthEqualPartialGain');
        var justPartial16 = document.getElementById('sixteenthPartialJust');
        var justPartial16Gain = document.getElementById('sixteenthJustPartialGain');
        var equalPartial16 = document.getElementById('sixteenthPartialEqual');
        var equalPartial16Gain = document.getElementById('sixteenthEqualPartialGain');
        renderEflat3();
        renderEflat4();
        renderEflat3WithHertz();
        renderEflat4WithHertz();
        renderEflat3WithRatioAndCents();
        renderEflat4WithRatioAndCents();
        renderOvertoneSeries();
        hookUpMergerNodes();
        initializeSoundingOscillators();
        masterVolume = masterVolumeAmount.value * 0.03;
        masterGainNode.gain.value = masterVolume;

        firstExample.addEventListener('mousedown', ()=>{
          partialOscillators[secondPartial][justPartial].gain.gain.value = 3.0;
        });
        firstExample.addEventListener('mouseup', ()=>{
          partialOscillators[secondPartial][justPartial].gain.gain.value = justPartial2Gain.value * 0.02;
        });
        secondExample.addEventListener('mousedown', ()=>{
          partialOscillators[fourthPartial][justPartial].gain.gain.value = 2.5;
        });
        secondExample.addEventListener('mouseup', ()=>{
          partialOscillators[fourthPartial][justPartial].gain.gain.value = justPartial4Gain.value * 0.02;
        });
        thirdExample.addEventListener('mousedown', ()=>{
          partialOscillators[fourthPartial][justPartial].gain.gain.value = 2.5;
        });
        thirdExample.addEventListener('mouseup', ()=>{
          partialOscillators[fourthPartial][justPartial].gain.gain.value = justPartial4Gain.value * 0.02;
        });
        fourthExample.addEventListener('mousedown', ()=>{
          partialOscillators[secondPartial][justPartial].gain.gain.value = 3.0;
        });
        fourthExample.addEventListener('mouseup', ()=>{
          partialOscillators[secondPartial][justPartial].gain.gain.value = justPartial2Gain.value * 0.02;
        });
        fifthExample.addEventListener('mousedown', ()=>{
          partialOscillators[fourthPartial][justPartial].gain.gain.value = 2.5;
        });
        fifthExample.addEventListener('mouseup', ()=>{
          partialOscillators[fourthPartial][justPartial].gain.gain.value = justPartial4Gain.value * 0.02;
        });
        sixthExample.addEventListener('mousedown', ()=>{
          partialOscillators[secondPartial][justPartial].gain.gain.value = 3.0;
        });
        sixthExample.addEventListener('mouseup', ()=>{
          partialOscillators[secondPartial][justPartial].gain.gain.value = justPartial2Gain.value * 0.02;
        });
        seventhExample.addEventListener('mousedown', ()=>{
          seriesOn = true;
          partialOscillators[firstPartial][justPartial].gain.gain.value = 3.0;
          setTimeout(()=>{
            if (seriesOn) {
              partialOscillators[secondPartial][justPartial].gain.gain.value = 3.0;
              setTimeout(()=>{
                if (seriesOn) {
                  partialOscillators[thirdPartial][justPartial].gain.gain.value = 2.5;
                  setTimeout(()=>{
                    if (seriesOn) {
                      partialOscillators[fourthPartial][justPartial].gain.gain.value = 2.5;
                      setTimeout(()=>{
                        if (seriesOn) {
                          partialOscillators[fifthPartial][justPartial].gain.gain.value = 2.0;
                          setTimeout(()=>{
                            if (seriesOn) {
                              partialOscillators[sixthPartial][justPartial].gain.gain.value = 2.0;
                              setTimeout(()=>{
                                if (seriesOn) {
                                  partialOscillators[seventhPartial][justPartial].gain.gain.value = 2.0;
                                  setTimeout(()=>{
                                    if (seriesOn) {
                                      partialOscillators[eighthPartial][justPartial].gain.gain.value = 2.0;
                                      setTimeout(()=>{
                                        if (seriesOn) {
                                          partialOscillators[ninthPartial][justPartial].gain.gain.value = 2.0;
                                          setTimeout(()=>{
                                            if (seriesOn) {
                                              partialOscillators[tenthPartial][justPartial].gain.gain.value = 2.0;
                                              setTimeout(()=>{
                                                if (seriesOn) {
                                                  partialOscillators[eleventhPartial][justPartial].gain.gain.value = 2.0;
                                                  setTimeout(()=>{
                                                    if (seriesOn) {
                                                      partialOscillators[twelfthPartial][justPartial].gain.gain.value = 2.0;
                                                      setTimeout(()=>{
                                                        if (seriesOn) {
                                                          partialOscillators[thirteenthPartial][justPartial].gain.gain.value = 2.0;
                                                          setTimeout(()=>{
                                                            if (seriesOn) {
                                                              partialOscillators[fourteenthPartial][justPartial].gain.gain.value = 2.0;
                                                              setTimeout(()=>{
                                                                if (seriesOn) {
                                                                  partialOscillators[fifteenthPartial][justPartial].gain.gain.value = 2.0;
                                                                  setTimeout(()=>{
                                                                    if (seriesOn) {
                                                                      partialOscillators[sixteenthPartial][justPartial].gain.gain.value = 2.0;
                                                                      setTimeout(()=>{
                                                                        if (seriesOn) {
                                                                          for (let i = firstPartial; i < 16; i++) {
                          partialOscillators[i][justPartial].gain.gain.value = 0.0;
                                                                          }
                                                                        }
                                                                      }, 6000);
                                                                    }
                                                                  }, 350);
                                                                }
                                                              }, 350);
                                                            }
                                                          }, 350);
                                                        }
                                                      }, 350);
                                                    }
                                                  }, 350);
                                                }
                                              }, 350);
                                            }
                                          }, 350);
                                        }
                                      }, 350);
                                    }
                                  }, 350);
                                }
                              }, 350);
                            }
                          }, 350);
                        }
                      }, 350);
                    }
                  }, 350);
                }
              }, 350);
            }
          }, 350);

        });
        seventhExample.addEventListener('mouseup', ()=>{
          seriesOn = false;
          for (let i = firstPartial; i < 16; i ++) {
            partialOscillators[i][justPartial].gain.gain.value = 0.0;
          }
        });
        justPartial1.addEventListener('mousedown', ()=>{
          partialOscillators[firstPartial][justPartial].gain.gain.value = justPartial1Gain.value * 0.03;
          justPartial1.addEventListener('mousemove', ()=>{
            partialOscillators[firstPartial][justPartial].gain.gain.value = justPartial1Gain.value * 0.03;
          });
        });
        justPartial1.addEventListener('mouseup', ()=>{
          partialOscillators[firstPartial][justPartial].gain.gain.value = justPartial1Gain.value * 0.03;
          justPartial1.removeEventListener('mousemove', ()=>{
            partialOscillators[firstPartial][justPartial].gain.gain.value = justPartial1Gain.value * 0.03;

          });
        });
        equalPartial1.addEventListener('mousedown', ()=>{
          partialOscillators[firstPartial][equalPartial].gain.gain.value = equalPartial1Gain.value * 0.03;
          equalPartial1.addEventListener('mousemove', ()=>{
            partialOscillators[firstPartial][equalPartial].gain.gain.value = equalPartial1Gain.value * 0.03;
          });
        });
        equalPartial1.addEventListener('mouseup', ()=>{
          partialOscillators[firstPartial][equalPartial].gain.gain.value = equalPartial1Gain.value * 0.03;
          equalPartial1.removeEventListener('mousemove', ()=>{
            partialOscillators[firstPartial][equalPartial].gain.gain.value = equalPartial1Gain.value * 0.03;

          });
        });
        justPartial2.addEventListener('mousedown', ()=>{
          partialOscillators[secondPartial][justPartial].gain.gain.value = justPartial2Gain.value * 0.02;
          justPartial2.addEventListener('mousemove', ()=>{
            partialOscillators[secondPartial][justPartial].gain.gain.value = justPartial2Gain.value * 0.02;
          });
        });
        justPartial2.addEventListener('mouseup', ()=>{
          partialOscillators[secondPartial][justPartial].gain.gain.value = justPartial2Gain.value * 0.02;
          justPartial2.removeEventListener('mousemove', ()=>{
            partialOscillators[secondPartial][justPartial].gain.gain.value = justPartial2Gain.value * 0.02;

          });
        });
        equalPartial2.addEventListener('mousedown', ()=>{
          partialOscillators[secondPartial][equalPartial].gain.gain.value = equalPartial2Gain.value * 0.02;
          equalPartial2.addEventListener('mousemove', ()=>{
            partialOscillators[secondPartial][equalPartial].gain.gain.value = equalPartial2Gain.value * 0.02;
          });
        });
        equalPartial2.addEventListener('mouseup', ()=>{
          partialOscillators[secondPartial][equalPartial].gain.gain.value = equalPartial2Gain.value * 0.02;
          equalPartial2.removeEventListener('mousemove', ()=>{
            partialOscillators[secondPartial][equalPartial].gain.gain.value = equalPartial2Gain.value * 0.02;

          });
        });
        justPartial3.addEventListener('mousedown', ()=>{
          partialOscillators[thirdPartial][justPartial].gain.gain.value = justPartial3Gain.value * 0.02;
          justPartial3.addEventListener('mousemove', ()=>{
            partialOscillators[thirdPartial][justPartial].gain.gain.value = justPartial3Gain.value * 0.02;
          });
        });
        justPartial3.addEventListener('mouseup', ()=>{
          partialOscillators[thirdPartial][justPartial].gain.gain.value = justPartial3Gain.value * 0.02;
          justPartial3.removeEventListener('mousemove', ()=>{
            partialOscillators[thirdPartial][justPartial].gain.gain.value = justPartial3Gain.value * 0.02;

          });
        });
        equalPartial3.addEventListener('mousedown', ()=>{
          partialOscillators[thirdPartial][equalPartial].gain.gain.value = equalPartial3Gain.value * 0.02;
          equalPartial3.addEventListener('mousemove', ()=>{
            partialOscillators[thirdPartial][equalPartial].gain.gain.value = equalPartial3Gain.value * 0.02;
          });
        });
        equalPartial3.addEventListener('mouseup', ()=>{
          partialOscillators[thirdPartial][equalPartial].gain.gain.value = equalPartial3Gain.value * 0.02;
          equalPartial3.removeEventListener('mousemove', ()=>{
            partialOscillators[thirdPartial][equalPartial].gain.gain.value = equalPartial3Gain.value * 0.02;

          });
        });
        justPartial4.addEventListener('mousedown', ()=>{
          partialOscillators[fourthPartial][justPartial].gain.gain.value = justPartial4Gain.value * 0.02;
          justPartial4.addEventListener('mousemove', ()=>{
            partialOscillators[fourthPartial][justPartial].gain.gain.value = justPartial4Gain.value * 0.02;
          });
        });
        justPartial4.addEventListener('mouseup', ()=>{
          partialOscillators[fourthPartial][justPartial].gain.gain.value = justPartial4Gain.value * 0.02;
          justPartial4.removeEventListener('mousemove', ()=>{
            partialOscillators[fourthPartial][justPartial].gain.gain.value = justPartial4Gain.value * 0.02;

          });
        });
        equalPartial4.addEventListener('mousedown', ()=>{
          partialOscillators[fourthPartial][equalPartial].gain.gain.value = equalPartial4Gain.value * 0.02;
          equalPartial4.addEventListener('mousemove', ()=>{
            partialOscillators[fourthPartial][equalPartial].gain.gain.value = equalPartial4Gain.value * 0.02;
          });
        });
        equalPartial4.addEventListener('mouseup', ()=>{
          partialOscillators[fourthPartial][equalPartial].gain.gain.value = equalPartial4Gain.value * 0.02;
          equalPartial4.removeEventListener('mousemove', ()=>{
            partialOscillators[fourthPartial][equalPartial].gain.gain.value = equalPartial4Gain.value * 0.02;

          });
        });
        justPartial5.addEventListener('mousedown', ()=>{
          partialOscillators[fifthPartial][justPartial].gain.gain.value = justPartial5Gain.value * 0.01;
          justPartial5.addEventListener('mousemove', ()=>{
            partialOscillators[fifthPartial][justPartial].gain.gain.value = justPartial5Gain.value * 0.01;
          });
        });
        justPartial5.addEventListener('mouseup', ()=>{
          partialOscillators[fifthPartial][justPartial].gain.gain.value = justPartial5Gain.value * 0.01;
          justPartial5.removeEventListener('mousemove', ()=>{
            partialOscillators[fifthPartial][justPartial].gain.gain.value = justPartial5Gain.value * 0.01;

          });
        });
        equalPartial5.addEventListener('mousedown', ()=>{
          partialOscillators[fifthPartial][equalPartial].gain.gain.value = equalPartial5Gain.value * 0.01;
          equalPartial5.addEventListener('mousemove', ()=>{
            partialOscillators[fifthPartial][equalPartial].gain.gain.value = equalPartial5Gain.value * 0.01;
          });
        });
        equalPartial5.addEventListener('mouseup', ()=>{
          partialOscillators[fifthPartial][equalPartial].gain.gain.value = equalPartial5Gain.value * 0.01;
          equalPartial5.removeEventListener('mousemove', ()=>{
            partialOscillators[fifthPartial][equalPartial].gain.gain.value = equalPartial5Gain.value * 0.01;

          });
        });
        justPartial6.addEventListener('mousedown', ()=>{
          partialOscillators[sixthPartial][justPartial].gain.gain.value = justPartial6Gain.value * 0.01;
          justPartial6.addEventListener('mousemove', ()=>{
            partialOscillators[sixthPartial][justPartial].gain.gain.value = justPartial6Gain.value * 0.01;
          });
        });
        justPartial6.addEventListener('mouseup', ()=>{
          partialOscillators[sixthPartial][justPartial].gain.gain.value = justPartial6Gain.value * 0.01;
          justPartial6.removeEventListener('mousemove', ()=>{
            partialOscillators[sixthPartial][justPartial].gain.gain.value = justPartial6Gain.value * 0.01;

          });
        });
        equalPartial6.addEventListener('mousedown', ()=>{
          partialOscillators[sixthPartial][equalPartial].gain.gain.value = equalPartial6Gain.value * 0.01;
          equalPartial6.addEventListener('mousemove', ()=>{
            partialOscillators[sixthPartial][equalPartial].gain.gain.value = equalPartial6Gain.value * 0.01;
          });
        });
        equalPartial6.addEventListener('mouseup', ()=>{
          partialOscillators[sixthPartial][equalPartial].gain.gain.value = equalPartial6Gain.value * 0.01;
          equalPartial6.removeEventListener('mousemove', ()=>{
            partialOscillators[sixthPartial][equalPartial].gain.gain.value = equalPartial6Gain.value * 0.01;

          });
        });
        justPartial7.addEventListener('mousedown', ()=>{
          partialOscillators[seventhPartial][justPartial].gain.gain.value = justPartial7Gain.value * 0.01;
          justPartial7.addEventListener('mousemove', ()=>{
            partialOscillators[seventhPartial][justPartial].gain.gain.value = justPartial7Gain.value * 0.01;
          });
        });
        justPartial7.addEventListener('mouseup', ()=>{
          partialOscillators[seventhPartial][justPartial].gain.gain.value = justPartial7Gain.value * 0.01;
          justPartial7.removeEventListener('mousemove', ()=>{
            partialOscillators[seventhPartial][justPartial].gain.gain.value = justPartial7Gain.value * 0.01;

          });
        });
        equalPartial7.addEventListener('mousedown', ()=>{
          partialOscillators[seventhPartial][equalPartial].gain.gain.value = equalPartial7Gain.value * 0.01;
          equalPartial7.addEventListener('mousemove', ()=>{
            partialOscillators[seventhPartial][equalPartial].gain.gain.value = equalPartial7Gain.value * 0.01;
          });
        });
        equalPartial7.addEventListener('mouseup', ()=>{
          partialOscillators[seventhPartial][equalPartial].gain.gain.value = equalPartial7Gain.value * 0.01;
          equalPartial7.removeEventListener('mousemove', ()=>{
            partialOscillators[seventhPartial][equalPartial].gain.gain.value = equalPartial7Gain.value * 0.01;

          });
        });
        justPartial8.addEventListener('mousedown', ()=>{
          partialOscillators[eighthPartial][justPartial].gain.gain.value = justPartial8Gain.value * 0.01;
          justPartial8.addEventListener('mousemove', ()=>{
            partialOscillators[eighthPartial][justPartial].gain.gain.value = justPartial8Gain.value * 0.01;
          });
        });
        justPartial8.addEventListener('mouseup', ()=>{
          partialOscillators[eighthPartial][justPartial].gain.gain.value = justPartial8Gain.value * 0.01;
          justPartial8.removeEventListener('mousemove', ()=>{
            partialOscillators[eighthPartial][justPartial].gain.gain.value = justPartial8Gain.value * 0.01;

          });
        });
        equalPartial8.addEventListener('mousedown', ()=>{
          partialOscillators[eighthPartial][equalPartial].gain.gain.value = equalPartial8Gain.value * 0.01;
          equalPartial8.addEventListener('mousemove', ()=>{
            partialOscillators[eighthPartial][equalPartial].gain.gain.value = equalPartial8Gain.value * 0.01;
          });
        });
        equalPartial8.addEventListener('mouseup', ()=>{
          partialOscillators[eighthPartial][equalPartial].gain.gain.value = equalPartial8Gain.value * 0.01;
          equalPartial8.removeEventListener('mousemove', ()=>{
            partialOscillators[eighthPartial][equalPartial].gain.gain.value = equalPartial8Gain.value * 0.01;

          });
        });
        justPartial9.addEventListener('mousedown', ()=>{
          partialOscillators[ninthPartial][justPartial].gain.gain.value = justPartial9Gain.value * 0.01;
          justPartial9.addEventListener('mousemove', ()=>{
            partialOscillators[ninthPartial][justPartial].gain.gain.value = justPartial9Gain.value * 0.01;
          });
        });
        justPartial9.addEventListener('mouseup', ()=>{
          partialOscillators[ninthPartial][justPartial].gain.gain.value = justPartial9Gain.value * 0.01;
          justPartial9.removeEventListener('mousemove', ()=>{
            partialOscillators[ninthPartial][justPartial].gain.gain.value = justPartial9Gain.value * 0.01;

          });
        });
        equalPartial9.addEventListener('mousedown', ()=>{
          partialOscillators[ninthPartial][equalPartial].gain.gain.value = equalPartial9Gain.value * 0.01;
          equalPartial9.addEventListener('mousemove', ()=>{
            partialOscillators[ninthPartial][equalPartial].gain.gain.value = equalPartial9Gain.value * 0.01;
          });
        });
        equalPartial9.addEventListener('mouseup', ()=>{
          partialOscillators[ninthPartial][equalPartial].gain.gain.value = equalPartial9Gain.value * 0.01;
          equalPartial9.removeEventListener('mousemove', ()=>{
            partialOscillators[ninthPartial][equalPartial].gain.gain.value = equalPartial9Gain.value * 0.01;

          });
        });
        justPartial10.addEventListener('mousedown', ()=>{
          partialOscillators[tenthPartial][justPartial].gain.gain.value = justPartial10Gain.value * 0.01;
          justPartial10.addEventListener('mousemove', ()=>{
            partialOscillators[tenthPartial][justPartial].gain.gain.value = justPartial10Gain.value * 0.01;
          });
        });
        justPartial10.addEventListener('mouseup', ()=>{
          partialOscillators[tenthPartial][justPartial].gain.gain.value = justPartial10Gain.value * 0.01;
          justPartial10.removeEventListener('mousemove', ()=>{
            partialOscillators[tenthPartial][justPartial].gain.gain.value = justPartial10Gain.value * 0.01;

          });
        });
        equalPartial10.addEventListener('mousedown', ()=>{
          partialOscillators[tenthPartial][equalPartial].gain.gain.value = equalPartial10Gain.value * 0.01;
          equalPartial10.addEventListener('mousemove', ()=>{
            partialOscillators[tenthPartial][equalPartial].gain.gain.value = equalPartial10Gain.value * 0.01;
          });
        });
        equalPartial10.addEventListener('mouseup', ()=>{
          partialOscillators[tenthPartial][equalPartial].gain.gain.value = equalPartial10Gain.value * 0.01;
          equalPartial10.removeEventListener('mousemove', ()=>{
            partialOscillators[tenthPartial][equalPartial].gain.gain.value = equalPartial10Gain.value * 0.01;

          });
        });
        justPartial11.addEventListener('mousedown', ()=>{
          partialOscillators[eleventhPartial][justPartial].gain.gain.value = justPartial11Gain.value * 0.01;
          justPartial11.addEventListener('mousemove', ()=>{
            partialOscillators[eleventhPartial][justPartial].gain.gain.value = justPartial11Gain.value * 0.01;
          });
        });
        justPartial11.addEventListener('mouseup', ()=>{
          partialOscillators[eleventhPartial][justPartial].gain.gain.value = justPartial11Gain.value * 0.01;
          justPartial11.removeEventListener('mousemove', ()=>{
            partialOscillators[eleventhPartial][justPartial].gain.gain.value = justPartial11Gain.value * 0.01;

          });
        });
        equalPartial11.addEventListener('mousedown', ()=>{
          partialOscillators[eleventhPartial][equalPartial].gain.gain.value = equalPartial11Gain.value * 0.01;
          equalPartial11.addEventListener('mousemove', ()=>{
            partialOscillators[eleventhPartial][equalPartial].gain.gain.value = equalPartial11Gain.value * 0.01;
          });
        });
        equalPartial11.addEventListener('mouseup', ()=>{
          partialOscillators[eleventhPartial][equalPartial].gain.gain.value = equalPartial11Gain.value * 0.01;
          equalPartial11.removeEventListener('mousemove', ()=>{
            partialOscillators[eleventhPartial][equalPartial].gain.gain.value = equalPartial11Gain.value * 0.01;

          });
        });
        justPartial12.addEventListener('mousedown', ()=>{
          partialOscillators[twelfthPartial][justPartial].gain.gain.value = justPartial12Gain.value * 0.01;
          justPartial12.addEventListener('mousemove', ()=>{
            partialOscillators[twelfthPartial][justPartial].gain.gain.value = justPartial12Gain.value * 0.01;
          });
        });
        justPartial12.addEventListener('mouseup', ()=>{
          partialOscillators[twelfthPartial][justPartial].gain.gain.value = justPartial12Gain.value * 0.01;
          justPartial12.removeEventListener('mousemove', ()=>{
            partialOscillators[twelfthPartial][justPartial].gain.gain.value = justPartial12Gain.value * 0.01;

          });
        });
        equalPartial12.addEventListener('mousedown', ()=>{
          partialOscillators[twelfthPartial][equalPartial].gain.gain.value = equalPartial12Gain.value * 0.01;
          equalPartial12.addEventListener('mousemove', ()=>{
            partialOscillators[twelfthPartial][equalPartial].gain.gain.value = equalPartial12Gain.value * 0.01;
          });
        });
        equalPartial12.addEventListener('mouseup', ()=>{
          partialOscillators[twelfthPartial][equalPartial].gain.gain.value = equalPartial12Gain.value * 0.01;
          equalPartial12.removeEventListener('mousemove', ()=>{
            partialOscillators[twelfthPartial][equalPartial].gain.gain.value = equalPartial12Gain.value * 0.01;

          });
        });
        justPartial13.addEventListener('mousedown', ()=>{
          partialOscillators[thirteenthPartial][justPartial].gain.gain.value = justPartial13Gain.value * 0.01;
          justPartial13.addEventListener('mousemove', ()=>{
            partialOscillators[thirteenthPartial][justPartial].gain.gain.value = justPartial13Gain.value * 0.01;
          });
        });
        justPartial13.addEventListener('mouseup', ()=>{
          partialOscillators[thirteenthPartial][justPartial].gain.gain.value = justPartial13Gain.value * 0.01;
          justPartial13.removeEventListener('mousemove', ()=>{
            partialOscillators[thirteenthPartial][justPartial].gain.gain.value = justPartial13Gain.value * 0.01;

          });
        });
        equalPartial13.addEventListener('mousedown', ()=>{
          partialOscillators[thirteenthPartial][equalPartial].gain.gain.value = equalPartial13Gain.value * 0.01;
          equalPartial13.addEventListener('mousemove', ()=>{
            partialOscillators[thirteenthPartial][equalPartial].gain.gain.value = equalPartial13Gain.value * 0.01;
          });
        });
        equalPartial13.addEventListener('mouseup', ()=>{
          partialOscillators[thirteenthPartial][equalPartial].gain.gain.value = equalPartial13Gain.value * 0.01;
          equalPartial13.removeEventListener('mousemove', ()=>{
            partialOscillators[thirteenthPartial][equalPartial].gain.gain.value = equalPartial13Gain.value * 0.01;

          });
        });
        justPartial14.addEventListener('mousedown', ()=>{
          partialOscillators[fourteenthPartial][justPartial].gain.gain.value = justPartial14Gain.value * 0.01;
          justPartial14.addEventListener('mousemove', ()=>{
            partialOscillators[fourteenthPartial][justPartial].gain.gain.value = justPartial14Gain.value * 0.01;
          });
        });
        justPartial14.addEventListener('mouseup', ()=>{
          partialOscillators[fourteenthPartial][justPartial].gain.gain.value = justPartial14Gain.value * 0.01;
          justPartial14.removeEventListener('mousemove', ()=>{
            partialOscillators[fourteenthPartial][justPartial].gain.gain.value = justPartial14Gain.value * 0.01;

          });
        });
        equalPartial14.addEventListener('mousedown', ()=>{
          partialOscillators[fourteenthPartial][equalPartial].gain.gain.value = equalPartial14Gain.value * 0.01;
          equalPartial14.addEventListener('mousemove', ()=>{
            partialOscillators[fourteenthPartial][equalPartial].gain.gain.value = equalPartial14Gain.value * 0.01;
          });
        });
        equalPartial14.addEventListener('mouseup', ()=>{
          partialOscillators[fourteenthPartial][equalPartial].gain.gain.value = equalPartial14Gain.value * 0.01;
          equalPartial14.removeEventListener('mousemove', ()=>{
            partialOscillators[fourteenthPartial][equalPartial].gain.gain.value = equalPartial14Gain.value * 0.01;

          });
        });
        justPartial15.addEventListener('mousedown', ()=>{
          partialOscillators[fifteenthPartial][justPartial].gain.gain.value = justPartial15Gain.value * 0.01;
          justPartial15.addEventListener('mousemove', ()=>{
            partialOscillators[fifteenthPartial][justPartial].gain.gain.value = justPartial15Gain.value * 0.01;
          });
        });
        justPartial15.addEventListener('mouseup', ()=>{
          partialOscillators[fifteenthPartial][justPartial].gain.gain.value = justPartial15Gain.value * 0.01;
          justPartial15.removeEventListener('mousemove', ()=>{
            partialOscillators[fifteenthPartial][justPartial].gain.gain.value = justPartial15Gain.value * 0.01;

          });
        });
        equalPartial15.addEventListener('mousedown', ()=>{
          partialOscillators[fifteenthPartial][equalPartial].gain.gain.value = equalPartial15Gain.value * 0.01;
          equalPartial15.addEventListener('mousemove', ()=>{
            partialOscillators[fifteenthPartial][equalPartial].gain.gain.value = equalPartial15Gain.value * 0.01;
          });
        });
        equalPartial15.addEventListener('mouseup', ()=>{
          partialOscillators[fifteenthPartial][equalPartial].gain.gain.value = equalPartial15Gain.value * 0.01;
          equalPartial15.removeEventListener('mousemove', ()=>{
            partialOscillators[fifteenthPartial][equalPartial].gain.gain.value = equalPartial15Gain.value * 0.01;

          });
        });
        justPartial16.addEventListener('mousedown', ()=>{
          partialOscillators[sixteenthPartial][justPartial].gain.gain.value = justPartial16Gain.value * 0.01;
          justPartial16.addEventListener('mousemove', ()=>{
            partialOscillators[sixteenthPartial][justPartial].gain.gain.value = justPartial16Gain.value * 0.01;
          });
        });
        justPartial16.addEventListener('mouseup', ()=>{
          partialOscillators[sixteenthPartial][justPartial].gain.gain.value = justPartial16Gain.value * 0.01;
          justPartial16.removeEventListener('mousemove', ()=>{
            partialOscillators[sixteenthPartial][justPartial].gain.gain.value = justPartial16Gain.value * 0.01;

          });
        });
        equalPartial16.addEventListener('mousedown', ()=>{
          partialOscillators[sixteenthPartial][equalPartial].gain.gain.value = equalPartial16Gain.value * 0.01;
          equalPartial16.addEventListener('mousemove', ()=>{
            partialOscillators[sixteenthPartial][equalPartial].gain.gain.value = equalPartial16Gain.value * 0.01;
          });
        });
        equalPartial16.addEventListener('mouseup', ()=>{
          partialOscillators[sixteenthPartial][equalPartial].gain.gain.value = equalPartial16Gain.value * 0.01;
          equalPartial16.removeEventListener('mousemove', ()=>{
            partialOscillators[sixteenthPartial][equalPartial].gain.gain.value = equalPartial16Gain.value * 0.01;

          });
        });
        masterVolumeControl.addEventListener('mousedown', ()=>{
          masterVolume = masterVolumeAmount.value * 0.03;
          masterGainNode.gain.value = masterVolume;
          console.log(masterVolume);
          masterVolumeControl.addEventListener('mousemove', ()=>{
            masterVolume = masterVolumeAmount.value * 0.03;
            masterGainNode.gain.value = masterVolume;
          });
        });
        masterVolumeControl.addEventListener('mouseup', ()=>{
          masterVolume = masterVolumeAmount.value * 0.03;
          masterGainNode.gain.value = masterVolume;
          masterVolumeControl.removeEventListener('mousemove', ()=>{
            masterVolume = masterVolumeAmount.value * 0.03;
            masterGainNode.gain.value = masterVolume;
          });
        });
      }

    }

}());
