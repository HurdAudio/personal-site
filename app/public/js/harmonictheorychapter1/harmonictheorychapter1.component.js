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

  var eFlatLydianScaleBPM = 120.00;
  var eFlatLydianScaleIntervalClassBPM = 120.00;

  var scaleTunings = {
    eb2: 77.781745930520228,
    f2: 87.307057858250971,
    g2: 97.998858995437324,
    a2: 110.00,
    bb2: 116.540940379522479,
    c3: 130.812782650299317,
    d3: 146.83238395870378,
    eb3: 155.563491861040455,
    f3: 174.614115716501942,
    g3: 195.997717990874647,
    a3: 220.00,
    bb3: 233.081880759044958,
    c4: 261.625565300598635,
    d4: 293.66476791740756,
    eb4: 311.126983722080911,
    f4: 349.228231433003884,
    g4: 391.995435981749294,
    a4: 440.00,
    bb4: 466.163761518089916,
    c5: 523.251130601197269,
    d5: 587.329535834815121,
    eb5: 622.253967444161821,
    f5: 698.456462866007769,
    g5: 783.990871963498588,
    a5: 880.00,
    bb5: 932.327523036179833,
    c6: 1046.502261202394539,
    d6: 1174.659071669630241,
    eb6: 1244.507934888323643
  };

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
    .component('harmonictheorychapter1', {
      controller: HarmonicTheoryChapter1,
      templateUrl: '/js/harmonictheorychapter1/harmonictheorychapter1.template.html'
    });

    HarmonicTheoryChapter1.$inject = ['$http', '$state', '$stateParams'];

    function HarmonicTheoryChapter1($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;

      function renderEflatLydianExercise0 () {
        var VF = Vex.Flow;

        var div = document.getElementById("EflatLydianExercise[0]");
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(1100, 300);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        var staveTreble = new VF.Stave(35, 40, 265);
        var staveBass = new VF.Stave(35, 160, 265);
        var staveTrebleBar2 = new VF.Stave(300, 40, 265);
        var staveBassBar2 = new VF.Stave(300, 160, 265);
        var staveTrebleBar3 = new VF.Stave(565, 40, 230);
        var staveBassBar3 = new VF.Stave(565, 160, 230);
        var staveTrebleBar4 = new VF.Stave(795, 40, 230);
        var staveBassBar4 = new VF.Stave(795, 160, 230);

        // Add cleffs and time signature.
        staveTreble.addClef("treble");
        staveBass.addClef("bass");

        // Connect it to the rendering context and draw!
        staveTreble.setContext(context).draw();
        staveBass.setContext(context).draw();
        staveTrebleBar2.setContext(context).draw();
        staveBassBar2.setContext(context).draw();
        staveTrebleBar3.setContext(context).draw();
        staveBassBar3.setContext(context).draw();
        staveTrebleBar4.setContext(context).draw();
        staveBassBar4.setContext(context).draw();

        // Create the notes
        var notes = [
          new VF.StaveNote({ keys: ["e/4"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),
          new VF.StaveNote({ keys: ["e/4"], duration: "q"}).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ keys: ["f/4"], duration: "q" })

          ];

        var notesBar2 = [
        	new VF.StaveNote({ keys: ["e/4"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),
          new VF.StaveNote({ keys: ["f/4"], duration: "q"}),

          new VF.StaveNote({ keys: ["g/4"], duration: "q" }),
          new VF.StaveNote({ keys: ["f/4"], duration: "q"})
        ];

        var notesBar3 = [
        	new VF.StaveNote({ keys: ["e/4"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),
          new VF.StaveNote({ keys: ["f/4"], duration: "q"}),

          new VF.StaveNote({ keys: ["g/4"], duration: "q" })
        ];

        var notesBar4 = [
        	new VF.StaveNote({ keys: ["a/4"], duration: "q" }),
          new VF.StaveNote({ keys: ["g/4"], duration: "q"}),

          new VF.StaveNote({ keys: ["f/4"], duration: "q" })
        ];

        var notes2 = [

          new VF.StaveNote({ clef: "bass", keys: ["e/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["e/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["f/2"], duration: "q" })

        ];
        var notes2Bar2 = [
        	new VF.StaveNote({ clef: "bass", keys: ["e/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["f/2"], duration: "q" }),

          new VF.StaveNote({ clef: "bass", keys: ["g/2"], duration: "q" }),
          new VF.StaveNote({ clef: "bass", keys: ["f/2"], duration: "q" })
        ];
        var notes2Bar3 = [
        	new VF.StaveNote({ clef: "bass", keys: ["e/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["f/2"], duration: "q" }),

          new VF.StaveNote({ clef: "bass", keys: ["g/2"], duration: "q" })
        ];
        var notes2Bar4 = [
        	new VF.StaveNote({ clef: "bass", keys: ["a/2"], duration: "q" }),

          new VF.StaveNote({ clef: "bass", keys: ["g/2"], duration: "q" }),

          new VF.StaveNote({ clef: "bass", keys: ["f/2"], duration: "q" })
        ];

        var voice = new VF.Voice({num_beats: 3,  beat_value: 4, resolution:VF.RESOLUTION});
        var voiceBar2 = new VF.Voice({num_beats: 4, beat_value: 4, resolution:VF.RESOLUTION});
        var voiceBar3 = new VF.Voice({num_beats: 3, beat_value: 4, resolution:VF.RESOLUTION});
        var voice2 = new VF.Voice({num_beats: 3, beat_value: 4, resolution:VF.RESOLUTION});
        var voice2Bar2 = new VF.Voice({num_beats:4, beat_value: 4, resolution:VF.RESOLUTION});
        var voice2Bar3 = new VF.Voice({num_beats: 3, beat_value: 4, resolution:VF.RESOLUTION});
        var voiceBar4 = new VF.Voice({num_beats: 3, beat_value: 4, resolution:VF.RESOLUTION});
        var voice2Bar4 = new VF.Voice({num_beats: 3, beat_value: 4, resolution:VF.RESOLUTION});
        voice.addTickables(notes).setStave(staveTreble);
        voice2.addTickables(notes2).setStave(staveBass);
        voiceBar2.addTickables(notesBar2).setStave(staveTrebleBar2);
        voice2Bar2.addTickables(notes2Bar2).setStave(staveBassBar2);
        voiceBar3.addTickables(notesBar3).setStave(staveTrebleBar3);
        voice2Bar3.addTickables(notes2Bar3).setStave(staveBassBar3);
        voiceBar4.addTickables(notesBar4).setStave(staveTrebleBar4);
        voice2Bar4.addTickables(notes2Bar4).setStave(staveBassBar4);

        var startX = Math.max(staveTreble.getNoteStartX(), staveBass.getNoteStartX());
        var startX2 = Math.max(staveTrebleBar2.getNoteStartX(), staveBassBar2.getNoteStartX());
        staveTreble.setNoteStartX(startX);
        staveBass.setNoteStartX(startX);
        staveTrebleBar2.setNoteStartX(startX2);
        staveBassBar2.setNoteStartX(startX2);

        var formatter = new VF.Formatter().joinVoices([voice]).joinVoices([voice2]).format([voice, voice2], 300 - (startX));
        var formatterBar2 = new VF.Formatter().joinVoices([voiceBar2]).joinVoices([voice2Bar2]).format([voiceBar2, voice2Bar2], 300 - (startX));
        var formatterBar3 = new VF.Formatter().joinVoices([voiceBar3]).joinVoices([voice2Bar3]).format([voiceBar3, voice2Bar3], 300 - (startX));
        var formatterBar4 = new VF.Formatter().joinVoices([voiceBar4]).joinVoices([voice2Bar4]).format([voiceBar4, voice2Bar4], 300 - (startX));



        // Render voice
        voice.draw(context, staveTreble);
        voice2.draw(context, staveBass);
        voiceBar2.draw(context, staveTrebleBar2);
        voice2Bar2.draw(context, staveBassBar2);
        voiceBar3.draw(context, staveTrebleBar3);
        voice2Bar3.draw(context, staveBassBar3);
        voiceBar4.draw(context, staveTrebleBar4);
        voice2Bar4.draw(context, staveBassBar4);
        renderExercize0Stave2();
      }

      function renderExercize0Stave2() {
        var VF = Vex.Flow;

        var div = document.getElementById("EflatLydianExercise[0]system2");
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(1200, 300);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        var staveTreble = new VF.Stave(0, 40, 265);
        var staveBass = new VF.Stave(0, 160, 265);
        var staveTrebleBar2 = new VF.Stave(265, 40, 245);
        var staveBassBar2 = new VF.Stave(265, 160, 245);
        var staveTrebleBar3 = new VF.Stave(510, 40, 260);
        var staveBassBar3 = new VF.Stave(510, 160, 260);
        var staveTrebleBar4 = new VF.Stave(770, 40, 260);
        var staveBassBar4 = new VF.Stave(770, 160, 260);

        // Add cleffs and time signature.
        staveTreble.addClef("treble");
        staveBass.addClef("bass");

        // Connect it to the rendering context and draw!
        staveTreble.setContext(context).draw();
        staveBass.setContext(context).draw();
        staveTrebleBar2.setContext(context).draw();
        staveBassBar2.setContext(context).draw();
        staveTrebleBar3.setContext(context).draw();
        staveBassBar3.setContext(context).draw();
        staveTrebleBar4.setContext(context).draw();
        staveBassBar4.setContext(context).draw();

        // Create the notes
        var notes = [
          new VF.StaveNote({ keys: ["e/4"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),
          new VF.StaveNote({ keys: ["f/4"], duration: "q"}),

          new VF.StaveNote({ keys: ["g/4"], duration: "q" }),
          new VF.StaveNote({ keys: ["a/4"], duration: "q" })

          ];

        var notesBar2 = [
        	new VF.StaveNote({ keys: ["b/4"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),
          new VF.StaveNote({ keys: ["a/4"], duration: "q"}),

          new VF.StaveNote({ keys: ["g/4"], duration: "q" }),
          new VF.StaveNote({ keys: ["f/4"], duration: "q"})
        ];

        var notesBar3 = [
        	new VF.StaveNote({ keys: ["e/4"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),
          new VF.StaveNote({ keys: ["f/4"], duration: "q"}),

          new VF.StaveNote({ keys: ["g/4"], duration: "q" }),

          new VF.StaveNote({ keys: ["a/4"], duration: "q"}),

          new VF.StaveNote({ keys: ["b/4"], duration: "q", stem_direction: -1}).addAccidental(0, new VF.Accidental("b"))
        ];

        var notesBar4 = [
        	new VF.StaveNote({ keys: ["c/5"], duration: "q", stem_direction: -1 }),
          new VF.StaveNote({ keys: ["b/4"], duration: "q", stem_direction: -1}).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ keys: ["a/4"], duration: "q" }),
          new VF.StaveNote({ keys: ["g/4"], duration: "q"}),
          new VF.StaveNote({ keys: ["f/4"], duration: "q"})
        ];

        var notes2 = [

          new VF.StaveNote({ clef: "bass", keys: ["e/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["f/2"], duration: "q" }),

          new VF.StaveNote({ clef: "bass", keys: ["g/2"], duration: "q" }),
       		new VF.StaveNote({ clef: "bass", keys: ["a/2"], duration: "q"})

        ];
        var notes2Bar2 = [
        	new VF.StaveNote({ clef: "bass", keys: ["b/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["a/2"], duration: "q" }),

          new VF.StaveNote({ clef: "bass", keys: ["g/2"], duration: "q" }),
          new VF.StaveNote({ clef: "bass", keys: ["f/2"], duration: "q" })
        ];
        var notes2Bar3 = [
        	new VF.StaveNote({ clef: "bass", keys: ["e/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["f/2"], duration: "q" }),

          new VF.StaveNote({ clef: "bass", keys: ["g/2"], duration: "q" }),
          new VF.StaveNote({ clef: "bass", keys: ["a/2"], duration: "q"}),
          new VF.StaveNote({ clef: "bass", keys: ["b/2"], duration: "q"}).addAccidental(0, new VF.Accidental("b"))
        ];
        var notes2Bar4 = [
        	new VF.StaveNote({ clef: "bass", keys: ["c/3"], duration: "q" }),

          new VF.StaveNote({ clef: "bass", keys: ["b/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["a/2"], duration: "q" }),
          new VF.StaveNote({ clef: "bass", keys: ["g/2"], duration: "q"}),
          new VF.StaveNote({ clef: "bass", keys: ["f/2"], duration: "q"})
        ];

        var voice = new VF.Voice({num_beats: 4,  beat_value: 4, resolution:VF.RESOLUTION});
        var voiceBar2 = new VF.Voice({num_beats: 4, beat_value: 4, resolution:VF.RESOLUTION});
        var voiceBar3 = new VF.Voice({num_beats: 5, beat_value: 4, resolution:VF.RESOLUTION});
        var voice2 = new VF.Voice({num_beats: 4, beat_value: 4, resolution:VF.RESOLUTION});
        var voice2Bar2 = new VF.Voice({num_beats:4, beat_value: 4, resolution:VF.RESOLUTION});
        var voice2Bar3 = new VF.Voice({num_beats: 5, beat_value: 4, resolution:VF.RESOLUTION});
        var voiceBar4 = new VF.Voice({num_beats: 5, beat_value: 4, resolution:VF.RESOLUTION});
        var voice2Bar4 = new VF.Voice({num_beats: 5, beat_value: 4, resolution:VF.RESOLUTION});
        voice.addTickables(notes).setStave(staveTreble);
        voice2.addTickables(notes2).setStave(staveBass);
        voiceBar2.addTickables(notesBar2).setStave(staveTrebleBar2);
        voice2Bar2.addTickables(notes2Bar2).setStave(staveBassBar2);
        voiceBar3.addTickables(notesBar3).setStave(staveTrebleBar3);
        voice2Bar3.addTickables(notes2Bar3).setStave(staveBassBar3);
        voiceBar4.addTickables(notesBar4).setStave(staveTrebleBar4);
        voice2Bar4.addTickables(notes2Bar4).setStave(staveBassBar4);

        var startX = Math.max(staveTreble.getNoteStartX(), staveBass.getNoteStartX());
        var startX2 = Math.max(staveTrebleBar2.getNoteStartX(), staveBassBar2.getNoteStartX());
        staveTreble.setNoteStartX(startX);
        staveBass.setNoteStartX(startX);
        staveTrebleBar2.setNoteStartX(startX2);
        staveBassBar2.setNoteStartX(startX2);

        var formatter = new VF.Formatter().joinVoices([voice]).joinVoices([voice2]).format([voice, voice2], 300 - (startX));
        var formatterBar2 = new VF.Formatter().joinVoices([voiceBar2]).joinVoices([voice2Bar2]).format([voiceBar2, voice2Bar2], 300 - (startX));
        var formatterBar3 = new VF.Formatter().joinVoices([voiceBar3]).joinVoices([voice2Bar3]).format([voiceBar3, voice2Bar3], 300 - (startX));
        var formatterBar4 = new VF.Formatter().joinVoices([voiceBar4]).joinVoices([voice2Bar4]).format([voiceBar4, voice2Bar4], 300 - (startX));



        // Render voice
        voice.draw(context, staveTreble);
        voice2.draw(context, staveBass);
        voiceBar2.draw(context, staveTrebleBar2);
        voice2Bar2.draw(context, staveBassBar2);
        voiceBar3.draw(context, staveTrebleBar3);
        voice2Bar3.draw(context, staveBassBar3);
        voiceBar4.draw(context, staveTrebleBar4);
        voice2Bar4.draw(context, staveBassBar4);
        renderExercize0Stave3();
      }

      function renderExercize0Stave3() {
        var VF = Vex.Flow;

        var div = document.getElementById("EflatLydianExercise[0]system3");
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(1200, 300);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        var staveTreble = new VF.Stave(0, 40, 265);
        var staveBass = new VF.Stave(0, 160, 265);
        var staveTrebleBar2 = new VF.Stave(265, 40, 245);
        var staveBassBar2 = new VF.Stave(265, 160, 245);
        var staveTrebleBar3 = new VF.Stave(510, 40, 260);
        var staveBassBar3 = new VF.Stave(510, 160, 260);
        var staveTrebleBar4 = new VF.Stave(770, 40, 260);
        var staveBassBar4 = new VF.Stave(770, 160, 260);

        // Add cleffs and time signature.
        staveTreble.addClef("treble");
        staveBass.addClef("bass");

        // Connect it to the rendering context and draw!
        staveTreble.setContext(context).draw();
        staveBass.setContext(context).draw();
        staveTrebleBar2.setContext(context).draw();
        staveBassBar2.setContext(context).draw();
        staveTrebleBar3.setContext(context).draw();
        staveBassBar3.setContext(context).draw();
        staveTrebleBar4.setContext(context).draw();
        staveBassBar4.setContext(context).draw();

        // Create the notes
        var notes = [
          new VF.StaveNote({ keys: ["e/4"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),
          new VF.StaveNote({ keys: ["f/4"], duration: "q"}),

          new VF.StaveNote({ keys: ["g/4"], duration: "q" })


          ];

        var notesBar2 = [
        	new VF.StaveNote({ keys: ["a/4"], duration: "q" }),
          new VF.StaveNote({ keys: ["b/4"], duration: "q", stem_direction: -1}).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ keys: ["c/5"], duration: "q", stem_direction: -1 })
        ];

        var notesBar3 = [
        	new VF.StaveNote({ keys: ["d/5"], duration: "q", stem_direction: -1 }),
          new VF.StaveNote({ keys: ["c/5"], duration: "q", stem_direction: -1}),

          new VF.StaveNote({ keys: ["b/4"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b"))
        ];

        var notesBar4 = [
        	new VF.StaveNote({ keys: ["a/4"], duration: "q" }),
          new VF.StaveNote({ keys: ["g/4"], duration: "q" }),

          new VF.StaveNote({ keys: ["f/4"], duration: "q" })
        ];

        var notes2 = [

          new VF.StaveNote({ clef: "bass", keys: ["e/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["f/2"], duration: "q" }),

          new VF.StaveNote({ clef: "bass", keys: ["g/2"], duration: "q" })

        ];
        var notes2Bar2 = [
        	new VF.StaveNote({ clef: "bass", keys: ["a/2"], duration: "q" }),

          new VF.StaveNote({ clef: "bass", keys: ["b/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["c/3"], duration: "q" })
        ];
        var notes2Bar3 = [
        	new VF.StaveNote({ clef: "bass", keys: ["d/3"], duration: "q", stem_direction: -1 }),

          new VF.StaveNote({ clef: "bass", keys: ["c/3"], duration: "q" }),

          new VF.StaveNote({ clef: "bass", keys: ["b/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b"))
        ];
        var notes2Bar4 = [
        	new VF.StaveNote({ clef: "bass", keys: ["a/2"], duration: "q" }),

          new VF.StaveNote({ clef: "bass", keys: ["g/2"], duration: "q" }),

          new VF.StaveNote({ clef: "bass", keys: ["f/2"], duration: "q" })
        ];

        var voice = new VF.Voice({num_beats: 3,  beat_value: 4, resolution:VF.RESOLUTION});
        var voiceBar2 = new VF.Voice({num_beats: 3, beat_value: 4, resolution:VF.RESOLUTION});
        var voiceBar3 = new VF.Voice({num_beats: 3, beat_value: 4, resolution:VF.RESOLUTION});
        var voice2 = new VF.Voice({num_beats: 3, beat_value: 4, resolution:VF.RESOLUTION});
        var voice2Bar2 = new VF.Voice({num_beats:3, beat_value: 4, resolution:VF.RESOLUTION});
        var voice2Bar3 = new VF.Voice({num_beats: 3, beat_value: 4, resolution:VF.RESOLUTION});
        var voiceBar4 = new VF.Voice({num_beats: 3, beat_value: 4, resolution:VF.RESOLUTION});
        var voice2Bar4 = new VF.Voice({num_beats: 3, beat_value: 4, resolution:VF.RESOLUTION});
        voice.addTickables(notes).setStave(staveTreble);
        voice2.addTickables(notes2).setStave(staveBass);
        voiceBar2.addTickables(notesBar2).setStave(staveTrebleBar2);
        voice2Bar2.addTickables(notes2Bar2).setStave(staveBassBar2);
        voiceBar3.addTickables(notesBar3).setStave(staveTrebleBar3);
        voice2Bar3.addTickables(notes2Bar3).setStave(staveBassBar3);
        voiceBar4.addTickables(notesBar4).setStave(staveTrebleBar4);
        voice2Bar4.addTickables(notes2Bar4).setStave(staveBassBar4);

        var startX = Math.max(staveTreble.getNoteStartX(), staveBass.getNoteStartX());
        var startX2 = Math.max(staveTrebleBar2.getNoteStartX(), staveBassBar2.getNoteStartX());
        staveTreble.setNoteStartX(startX);
        staveBass.setNoteStartX(startX);
        staveTrebleBar2.setNoteStartX(startX2);
        staveBassBar2.setNoteStartX(startX2);

        var formatter = new VF.Formatter().joinVoices([voice]).joinVoices([voice2]).format([voice, voice2], 300 - (startX));
        var formatterBar2 = new VF.Formatter().joinVoices([voiceBar2]).joinVoices([voice2Bar2]).format([voiceBar2, voice2Bar2], 300 - (startX));
        var formatterBar3 = new VF.Formatter().joinVoices([voiceBar3]).joinVoices([voice2Bar3]).format([voiceBar3, voice2Bar3], 300 - (startX));
        var formatterBar4 = new VF.Formatter().joinVoices([voiceBar4]).joinVoices([voice2Bar4]).format([voiceBar4, voice2Bar4], 300 - (startX));



        // Render voice
        voice.draw(context, staveTreble);
        voice2.draw(context, staveBass);
        voiceBar2.draw(context, staveTrebleBar2);
        voice2Bar2.draw(context, staveBassBar2);
        voiceBar3.draw(context, staveTrebleBar3);
        voice2Bar3.draw(context, staveBassBar3);
        voiceBar4.draw(context, staveTrebleBar4);
        voice2Bar4.draw(context, staveBassBar4);
        renderExercize0Stave4();
      }

      function renderExercize0Stave4() {
        var VF = Vex.Flow;

        var div = document.getElementById("EflatLydianExercise[0]system4");
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(1200, 300);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        var staveTreble = new VF.Stave(0, 40, 265);
        var staveBass = new VF.Stave(0, 160, 265);
        var staveTrebleBar2 = new VF.Stave(265, 40, 245);
        var staveBassBar2 = new VF.Stave(265, 160, 245);
        var staveTrebleBar3 = new VF.Stave(510, 40, 260);
        var staveBassBar3 = new VF.Stave(510, 160, 260);
        var staveTrebleBar4 = new VF.Stave(770, 40, 260);
        var staveBassBar4 = new VF.Stave(770, 160, 260);

        // Add cleffs and time signature.
        staveTreble.addClef("treble");
        staveBass.addClef("bass");

        // Connect it to the rendering context and draw!
        staveTreble.setContext(context).draw();
        staveBass.setContext(context).draw();
        staveTrebleBar2.setContext(context).draw();
        staveBassBar2.setContext(context).draw();
        staveTrebleBar3.setContext(context).draw();
        staveBassBar3.setContext(context).draw();
        staveTrebleBar4.setContext(context).draw();
        staveBassBar4.setContext(context).draw();

        // Create the notes
        var notes = [
          new VF.StaveNote({ keys: ["e/4"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),
          new VF.StaveNote({ keys: ["f/4"], duration: "q"}),

          new VF.StaveNote({ keys: ["g/4"], duration: "q" })


          ];

        var notesBar2 = [
        	new VF.StaveNote({ keys: ["a/4"], duration: "q" }),
          new VF.StaveNote({ keys: ["b/4"], duration: "q", stem_direction: -1}).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ keys: ["c/5"], duration: "q", stem_direction: -1 }),
          new VF.StaveNote({ keys: ["d/5"], duration: "q", stem_direction: -1})
        ];

        var notesBar3 = [
        	new VF.StaveNote({ keys: ["e/5"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),
          new VF.StaveNote({ keys: ["d/5"], duration: "q", stem_direction: -1}),
          new VF.StaveNote({ keys: ["c/5"], duration: "q", stem_direction: -1 })
        ];

        var notesBar4 = [
        	new VF.StaveNote({ keys: ["b/4"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),
          new VF.StaveNote({ keys: ["a/4"], duration: "q" }),

          new VF.StaveNote({ keys: ["g/4"], duration: "q" }),
          new VF.StaveNote({ keys: ["f/4"], duration: "q" })
        ];

        var notes2 = [

          new VF.StaveNote({ clef: "bass", keys: ["e/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["f/2"], duration: "q" }),

          new VF.StaveNote({ clef: "bass", keys: ["g/2"], duration: "q" })

        ];
        var notes2Bar2 = [
        	new VF.StaveNote({ clef: "bass", keys: ["a/2"], duration: "q" }),

          new VF.StaveNote({ clef: "bass", keys: ["b/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["c/3"], duration: "q" }),
          new VF.StaveNote({ clef: "bass", keys: ["d/3"], duration: "q", stem_direction: -1})
        ];
        var notes2Bar3 = [
        	new VF.StaveNote({ clef: "bass", keys: ["e/3"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["d/3"], duration: "q" }),

          new VF.StaveNote({ clef: "bass", keys: ["c/3"], duration: "q" })
        ];
        var notes2Bar4 = [
        	new VF.StaveNote({ clef: "bass", keys: ["b/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["a/2"], duration: "q" }),

          new VF.StaveNote({ clef: "bass", keys: ["g/2"], duration: "q" }),
          new VF.StaveNote({ clef: "bass", keys: ["f/2"], duration: "q"})
        ];

        var voice = new VF.Voice({num_beats: 3,  beat_value: 4, resolution:VF.RESOLUTION});
        var voiceBar2 = new VF.Voice({num_beats: 4, beat_value: 4, resolution:VF.RESOLUTION});
        var voiceBar3 = new VF.Voice({num_beats: 3, beat_value: 4, resolution:VF.RESOLUTION});
        var voice2 = new VF.Voice({num_beats: 3, beat_value: 4, resolution:VF.RESOLUTION});
        var voice2Bar2 = new VF.Voice({num_beats:4, beat_value: 4, resolution:VF.RESOLUTION});
        var voice2Bar3 = new VF.Voice({num_beats: 3, beat_value: 4, resolution:VF.RESOLUTION});
        var voiceBar4 = new VF.Voice({num_beats: 4, beat_value: 4, resolution:VF.RESOLUTION});
        var voice2Bar4 = new VF.Voice({num_beats: 4, beat_value: 4, resolution:VF.RESOLUTION});
        voice.addTickables(notes).setStave(staveTreble);
        voice2.addTickables(notes2).setStave(staveBass);
        voiceBar2.addTickables(notesBar2).setStave(staveTrebleBar2);
        voice2Bar2.addTickables(notes2Bar2).setStave(staveBassBar2);
        voiceBar3.addTickables(notesBar3).setStave(staveTrebleBar3);
        voice2Bar3.addTickables(notes2Bar3).setStave(staveBassBar3);
        voiceBar4.addTickables(notesBar4).setStave(staveTrebleBar4);
        voice2Bar4.addTickables(notes2Bar4).setStave(staveBassBar4);

        var startX = Math.max(staveTreble.getNoteStartX(), staveBass.getNoteStartX());
        var startX2 = Math.max(staveTrebleBar2.getNoteStartX(), staveBassBar2.getNoteStartX());
        staveTreble.setNoteStartX(startX);
        staveBass.setNoteStartX(startX);
        staveTrebleBar2.setNoteStartX(startX2);
        staveBassBar2.setNoteStartX(startX2);

        var formatter = new VF.Formatter().joinVoices([voice]).joinVoices([voice2]).format([voice, voice2], 300 - (startX));
        var formatterBar2 = new VF.Formatter().joinVoices([voiceBar2]).joinVoices([voice2Bar2]).format([voiceBar2, voice2Bar2], 300 - (startX));
        var formatterBar3 = new VF.Formatter().joinVoices([voiceBar3]).joinVoices([voice2Bar3]).format([voiceBar3, voice2Bar3], 300 - (startX));
        var formatterBar4 = new VF.Formatter().joinVoices([voiceBar4]).joinVoices([voice2Bar4]).format([voiceBar4, voice2Bar4], 300 - (startX));



        // Render voice
        voice.draw(context, staveTreble);
        voice2.draw(context, staveBass);
        voiceBar2.draw(context, staveTrebleBar2);
        voice2Bar2.draw(context, staveBassBar2);
        voiceBar3.draw(context, staveTrebleBar3);
        voice2Bar3.draw(context, staveBassBar3);
        voiceBar4.draw(context, staveTrebleBar4);
        voice2Bar4.draw(context, staveBassBar4);
        renderExercize0Stave5();
      }

      function renderExercize0Stave5 () {
        var VF = Vex.Flow;

        var div = document.getElementById("EflatLydianExercise[0]system5");
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(1200, 300);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        var staveTreble = new VF.Stave(0, 40, 265);
        var staveBass = new VF.Stave(0, 160, 265);
        var staveTrebleBar2 = new VF.Stave(265, 40, 245);
        var staveBassBar2 = new VF.Stave(265, 160, 245);
        var staveTrebleBar3 = new VF.Stave(510, 40, 260);
        var staveBassBar3 = new VF.Stave(510, 160, 260);
        var staveTrebleBar4 = new VF.Stave(770, 40, 260);
        var staveBassBar4 = new VF.Stave(770, 160, 260);

        // Add cleffs and time signature.
        staveTreble.addClef("treble");
        staveBass.addClef("bass");

        // Connect it to the rendering context and draw!
        staveTreble.setContext(context).draw();
        staveBass.setContext(context).draw();
        staveTrebleBar2.setContext(context).draw();
        staveBassBar2.setContext(context).draw();
        staveTrebleBar3.setContext(context).draw();
        staveBassBar3.setContext(context).draw();
        staveTrebleBar4.setContext(context).draw();
        staveBassBar4.setContext(context).draw();

        // Create the notes
        var notes = [
          new VF.StaveNote({ keys: ["e/4"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),
          new VF.StaveNote({ keys: ["f/4"], duration: "q"}),

          new VF.StaveNote({ keys: ["g/4"], duration: "q" })


          ];

        var notesBar2 = [
        	new VF.StaveNote({ keys: ["a/4"], duration: "q" }),
          new VF.StaveNote({ keys: ["b/4"], duration: "q", stem_direction: -1}).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ keys: ["c/5"], duration: "q", stem_direction: -1 }),
          new VF.StaveNote({ keys: ["d/5"], duration: "q", stem_direction: -1})
        ];

        var notesBar3 = [
        	new VF.StaveNote({ keys: ["e/5"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),
          new VF.StaveNote({ keys: ["d/5"], duration: "q", stem_direction: -1}),
          new VF.StaveNote({ keys: ["c/5"], duration: "q", stem_direction: -1 })
        ];

        var notesBar4 = [
        	new VF.StaveNote({ keys: ["b/4"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),
          new VF.StaveNote({ keys: ["a/4"], duration: "q" }),

          new VF.StaveNote({ keys: ["g/4"], duration: "q" }),
          new VF.StaveNote({ keys: ["f/4"], duration: "q" })
        ];

        var notes2 = [

          new VF.StaveNote({ clef: "bass", keys: ["e/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["f/2"], duration: "q" }),

          new VF.StaveNote({ clef: "bass", keys: ["g/2"], duration: "q" })

        ];
        var notes2Bar2 = [
        	new VF.StaveNote({ clef: "bass", keys: ["a/2"], duration: "q" }),

          new VF.StaveNote({ clef: "bass", keys: ["b/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["c/3"], duration: "q" }),
          new VF.StaveNote({ clef: "bass", keys: ["d/3"], duration: "q", stem_direction: -1})
        ];
        var notes2Bar3 = [
        	new VF.StaveNote({ clef: "bass", keys: ["e/3"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["d/3"], duration: "q" }),

          new VF.StaveNote({ clef: "bass", keys: ["c/3"], duration: "q" })
        ];
        var notes2Bar4 = [
        	new VF.StaveNote({ clef: "bass", keys: ["b/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["a/2"], duration: "q" }),

          new VF.StaveNote({ clef: "bass", keys: ["g/2"], duration: "q" }),
          new VF.StaveNote({ clef: "bass", keys: ["f/2"], duration: "q"})
        ];

        var voice = new VF.Voice({num_beats: 3,  beat_value: 4, resolution:VF.RESOLUTION});
        var voiceBar2 = new VF.Voice({num_beats: 4, beat_value: 4, resolution:VF.RESOLUTION});
        var voiceBar3 = new VF.Voice({num_beats: 3, beat_value: 4, resolution:VF.RESOLUTION});
        var voice2 = new VF.Voice({num_beats: 3, beat_value: 4, resolution:VF.RESOLUTION});
        var voice2Bar2 = new VF.Voice({num_beats:4, beat_value: 4, resolution:VF.RESOLUTION});
        var voice2Bar3 = new VF.Voice({num_beats: 3, beat_value: 4, resolution:VF.RESOLUTION});
        var voiceBar4 = new VF.Voice({num_beats: 4, beat_value: 4, resolution:VF.RESOLUTION});
        var voice2Bar4 = new VF.Voice({num_beats: 4, beat_value: 4, resolution:VF.RESOLUTION});
        voice.addTickables(notes).setStave(staveTreble);
        voice2.addTickables(notes2).setStave(staveBass);
        voiceBar2.addTickables(notesBar2).setStave(staveTrebleBar2);
        voice2Bar2.addTickables(notes2Bar2).setStave(staveBassBar2);
        voiceBar3.addTickables(notesBar3).setStave(staveTrebleBar3);
        voice2Bar3.addTickables(notes2Bar3).setStave(staveBassBar3);
        voiceBar4.addTickables(notesBar4).setStave(staveTrebleBar4);
        voice2Bar4.addTickables(notes2Bar4).setStave(staveBassBar4);

        var startX = Math.max(staveTreble.getNoteStartX(), staveBass.getNoteStartX());
        var startX2 = Math.max(staveTrebleBar2.getNoteStartX(), staveBassBar2.getNoteStartX());
        staveTreble.setNoteStartX(startX);
        staveBass.setNoteStartX(startX);
        staveTrebleBar2.setNoteStartX(startX2);
        staveBassBar2.setNoteStartX(startX2);

        var formatter = new VF.Formatter().joinVoices([voice]).joinVoices([voice2]).format([voice, voice2], 300 - (startX));
        var formatterBar2 = new VF.Formatter().joinVoices([voiceBar2]).joinVoices([voice2Bar2]).format([voiceBar2, voice2Bar2], 300 - (startX));
        var formatterBar3 = new VF.Formatter().joinVoices([voiceBar3]).joinVoices([voice2Bar3]).format([voiceBar3, voice2Bar3], 300 - (startX));
        var formatterBar4 = new VF.Formatter().joinVoices([voiceBar4]).joinVoices([voice2Bar4]).format([voiceBar4, voice2Bar4], 300 - (startX));



        // Render voice
        voice.draw(context, staveTreble);
        voice2.draw(context, staveBass);
        voiceBar2.draw(context, staveTrebleBar2);
        voice2Bar2.draw(context, staveBassBar2);
        voiceBar3.draw(context, staveTrebleBar3);
        voice2Bar3.draw(context, staveBassBar3);
        voiceBar4.draw(context, staveTrebleBar4);
        voice2Bar4.draw(context, staveBassBar4);
        renderExercize0Stave6();
      }

      function renderExercize0Stave6 () {
        var VF = Vex.Flow;

        var div = document.getElementById("EflatLydianExercise[0]system6");
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(1200, 300);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        var staveTreble = new VF.Stave(0, 40, 165);
        var staveBass = new VF.Stave(0, 160, 165);
        var staveTrebleBar2 = new VF.Stave(165, 40, 5);
        var staveBassBar2 = new VF.Stave(165, 160, 5);


        // Add cleffs and time signature.
        staveTreble.addClef("treble");
        staveBass.addClef("bass");

        // Connect it to the rendering context and draw!
        staveTreble.setContext(context).draw();
        staveBass.setContext(context).draw();
        staveTrebleBar2.setContext(context).draw();
        staveBassBar2.setContext(context).draw();


        // Create the notes
        var notes = [
          new VF.StaveNote({ keys: ["e/4"], duration: "h" }).addAccidental(0, new VF.Accidental("b"))


          ];

        var notesBar2 = [
        	new VF.StaveNote({ keys: ["a/4"], duration: "q" }),
          new VF.StaveNote({ keys: ["b/4"], duration: "q", stem_direction: -1}).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ keys: ["c/5"], duration: "q", stem_direction: -1 }),
          new VF.StaveNote({ keys: ["d/5"], duration: "q", stem_direction: -1})
        ];

        var notesBar3 = [
        	new VF.StaveNote({ keys: ["e/5"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),
          new VF.StaveNote({ keys: ["d/5"], duration: "q", stem_direction: -1}),
          new VF.StaveNote({ keys: ["c/5"], duration: "q", stem_direction: -1 })
        ];

        var notesBar4 = [
        	new VF.StaveNote({ keys: ["b/4"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),
          new VF.StaveNote({ keys: ["a/4"], duration: "q" }),

          new VF.StaveNote({ keys: ["g/4"], duration: "q" }),
          new VF.StaveNote({ keys: ["f/4"], duration: "q" })
        ];

        var notes2 = [

          new VF.StaveNote({ clef: "bass", keys: ["e/2"], duration: "h" }).addAccidental(0, new VF.Accidental("b"))



        ];
        var notes2Bar2 = [
        	new VF.StaveNote({ clef: "bass", keys: ["a/2"], duration: "q" }),

          new VF.StaveNote({ clef: "bass", keys: ["b/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["c/3"], duration: "q" }),
          new VF.StaveNote({ clef: "bass", keys: ["d/3"], duration: "q", stem_direction: -1})
        ];
        var notes2Bar3 = [
        	new VF.StaveNote({ clef: "bass", keys: ["e/3"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["d/3"], duration: "q" }),

          new VF.StaveNote({ clef: "bass", keys: ["c/3"], duration: "q" })
        ];
        var notes2Bar4 = [
        	new VF.StaveNote({ clef: "bass", keys: ["b/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["a/2"], duration: "q" }),

          new VF.StaveNote({ clef: "bass", keys: ["g/2"], duration: "q" }),
          new VF.StaveNote({ clef: "bass", keys: ["f/2"], duration: "q"})
        ];

        var voice = new VF.Voice({num_beats: 2,  beat_value: 4, resolution:VF.RESOLUTION});
        var voiceBar2 = new VF.Voice({num_beats: 4, beat_value: 4, resolution:VF.RESOLUTION});
        var voice2 = new VF.Voice({num_beats: 2, beat_value: 4, resolution:VF.RESOLUTION});
        var voice2Bar2 = new VF.Voice({num_beats:4, beat_value: 4, resolution:VF.RESOLUTION});

        voice.addTickables(notes).setStave(staveTreble);
        voice2.addTickables(notes2).setStave(staveBass);
        voiceBar2.addTickables(notesBar2).setStave(staveTrebleBar2);
        voice2Bar2.addTickables(notes2Bar2).setStave(staveBassBar2);


        var startX = Math.max(staveTreble.getNoteStartX(), staveBass.getNoteStartX());
        var startX2 = Math.max(staveTrebleBar2.getNoteStartX(), staveBassBar2.getNoteStartX());
        staveTreble.setNoteStartX(startX);
        staveBass.setNoteStartX(startX);
        staveTrebleBar2.setNoteStartX(startX2);
        staveBassBar2.setNoteStartX(startX2);

        var formatter = new VF.Formatter().joinVoices([voice]).joinVoices([voice2]).format([voice, voice2], 300 - (startX));
        var formatterBar2 = new VF.Formatter().joinVoices([voiceBar2]).joinVoices([voice2Bar2]).format([voiceBar2, voice2Bar2], 300 - (startX));




        // Render voice
        voice.draw(context, staveTreble);
        voice2.draw(context, staveBass);
      }


      function renderEflatLydianLydian () {
        var VF = Vex.Flow;

        var div = document.getElementById("EFlatLydianScale");
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(900, 300);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        var staveTreble = new VF.Stave(10, 40, 800);
        var staveBass = new VF.Stave(10, 160, 800);

        // Add cleffs and time signature.
        staveTreble.addClef("treble");
        staveBass.addClef("bass");

        // Connect it to the rendering context and draw!
        staveTreble.setContext(context).draw();
        staveBass.setContext(context).draw();

        // Create the notes
        var notes = [
          new VF.StaveNote({ keys: ["e/4"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),
          new VF.StaveNote({ keys: ["f/4"], duration: "q"}).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ keys: ["g/4"], duration: "q" }).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ keys: ["a/4"], duration: "q" }).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ keys: ["b/4"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ keys: ["c/5"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("n")),


          new VF.StaveNote({ keys: ["d/5"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ keys: ["e/5"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b"))
        ];
        var notes2 = [

          new VF.StaveNote({ clef: "bass", keys: ["e/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["f/2"], duration: "q" }).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ clef: "bass", keys: ["g/2"], duration: "q" }).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ clef: "bass", keys: ["a/2"], duration: "q" }).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ clef: "bass", keys: ["b/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["c/3"], duration: "q" }).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ clef: "bass", keys: ["d/3"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ clef: "bass", keys: ["e/3"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b"))
        ];

        var voice = new VF.Voice({num_beats: 8,  beat_value: 4, resolution:VF.RESOLUTION});
        var voice2 = new VF.Voice({num_beats: 8, beat_value: 4, resolution:VF.RESOLUTION});
        voice.addTickables(notes).setStave(staveTreble);
        voice2.addTickables(notes2).setStave(staveBass);

        var startX = Math.max(staveTreble.getNoteStartX(), staveBass.getNoteStartX());
        staveTreble.setNoteStartX(startX);
        staveBass.setNoteStartX(startX);

        var formatter = new VF.Formatter().joinVoices([voice]).joinVoices([voice2]).format([voice, voice2], 800 - (startX));


        // Render voice
        voice.draw(context, staveTreble);
        voice2.draw(context, staveBass);
      }

      function renderEflatLydianWithIntervalClasses() {
        var VF = Vex.Flow;

        var div = document.getElementById("EFlatLydianScaleWithIntervalClasses");
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(900, 315);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        var staveTreble = new VF.Stave(10, 40, 800);
        var staveBass = new VF.Stave(10, 160, 800);
        var staveText = new VF.Stave(10, 280, 800);

        // Add cleffs and time signature.
        staveTreble.addClef("treble");
        staveBass.addClef("bass");

        // Connect it to the rendering context and draw!
        staveTreble.setContext(context).draw();
        staveBass.setContext(context).draw();
        staveText.setContext(context).draw();

        // Create the notes
        var notes = [
          new VF.StaveNote({ keys: ["e/4"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),
          new VF.StaveNote({ keys: ["f/4"], duration: "q"}).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ keys: ["g/4"], duration: "q" }).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ keys: ["a/4"], duration: "q" }).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ keys: ["b/4"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ keys: ["c/5"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("n")),


          new VF.StaveNote({ keys: ["d/5"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ keys: ["e/5"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b"))
        ];

        var notes2 = [

          new VF.StaveNote({ clef: "bass", keys: ["e/2"], duration: "q"}).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["f/2"], duration: "q" }).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ clef: "bass", keys: ["g/2"], duration: "q" }).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ clef: "bass", keys: ["a/2"], duration: "q" }).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ clef: "bass", keys: ["b/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["c/3"], duration: "q" }).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ clef: "bass", keys: ["d/3"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ clef: "bass", keys: ["e/3"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b"))
        ];

        var text = [
        	new VF.TextNote({ text: "Tonic", font: { family: "Lato", size: 12, weight: ""}, duration: "q"}).setStave(staveText).setJustification(VF.TextNote.Justification.LEFT),
          new VF.TextNote({ text: "Major 2nd", font: { family: "Lato", size: 12, weight: ""}, duration: "q"}).setStave(staveText).setJustification(VF.TextNote.Justification.NONE),
          new VF.TextNote({ text: "Major 3rd", font: { family: "Lato", size: 12, weight: ""}, duration: "q"}).setStave(staveText),
          new VF.TextNote({ text: "Aug 4th", font: { family: "Lato", size: 12, weight: ""}, duration: "q"}).setStave(staveText),
          new VF.TextNote({ text: "Perfect 5th", font: { family: "Lato", size: 12, weight: ""}, duration: "q"}).setStave(staveText),
          new VF.TextNote({ text: "Major 6th", font: { family: "Lato", size: 12, weight: ""}, duration: "q"}).setStave(staveText),
          new VF.TextNote({ text: "Major 7th", font: { family: "Lato", size: 12, weight: ""}, duration: "q"}).setStave(staveText),
          new VF.TextNote({ text: "Octave", font: { family: "Lato", size: 12, weight: ""}, duration: "q"}).setLine(0).setStave(staveText).setJustification(VF.TextNote.Justification.NONE)

        ];

        var voice = new VF.Voice({num_beats: 8,  beat_value: 4, resolution:VF.RESOLUTION});
        var voice2 = new VF.Voice({num_beats: 8, beat_value: 4, resolution:VF.RESOLUTION});
        var voice3 = new VF.Voice({num_beats: 8, beat_value: 4, resolution:VF.RESOLUTION});
        voice.addTickables(notes).setStave(staveTreble);
        voice2.addTickables(notes2).setStave(staveBass);
        voice3.addTickables(text).setStave(staveText);

        var startX = Math.max(staveTreble.getNoteStartX(), staveBass.getNoteStartX());
        staveTreble.setNoteStartX(startX - 15);
        staveBass.setNoteStartX(startX);


        var formatter = new VF.Formatter().joinVoices([voice, voice2, voice3]).format([voice, voice2, voice3], 800 - (startX));


        // Render voice
        voice.draw(context, staveTreble);
        voice2.draw(context, staveBass);
        voice3.draw(context, staveText);
      }

      function renderEflatLydianTrebleHertz() {
        var VF = Vex.Flow;

        var div = document.getElementById("EflatLydianTrebleHertz");
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(900, 190);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        var staveTreble = new VF.Stave(10, 40, 800);
        var staveText = new VF.Stave(10, 160, 800);

        // Add cleffs and time signature.
        staveTreble.addClef("treble");

        // Connect it to the rendering context and draw!
        staveTreble.setContext(context).draw();
        staveText.setContext(context).draw();

        // Create the notes
        var notes = [
          new VF.StaveNote({ keys: ["e/4"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),
          new VF.StaveNote({ keys: ["f/4"], duration: "q"}).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ keys: ["g/4"], duration: "q" }).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ keys: ["a/4"], duration: "q" }).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ keys: ["b/4"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ keys: ["c/5"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("n")),


          new VF.StaveNote({ keys: ["d/5"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ keys: ["e/5"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b"))
        ];



        var text = [
        	new VF.TextNote({ text: "311.1270Hz", font: { family: "Lato", size: 12, weight: ""}, duration: "q"}).setStave(staveText).setJustification(VF.TextNote.Justification.LEFT),
          new VF.TextNote({ text: "349.2282Hz", font: { family: "Lato", size: 12, weight: ""}, duration: "q"}).setStave(staveText).setJustification(VF.TextNote.Justification.NONE),
          new VF.TextNote({ text: "391.9954Hz", font: { family: "Lato", size: 12, weight: ""}, duration: "q"}).setStave(staveText),
          new VF.TextNote({ text: "440.0000Hz", font: { family: "Lato", size: 12, weight: ""}, duration: "q"}).setStave(staveText),
          new VF.TextNote({ text: "466.1638Hz", font: { family: "Lato", size: 12, weight: ""}, duration: "q"}).setStave(staveText),
          new VF.TextNote({ text: "523.2511Hz", font: { family: "Lato", size: 12, weight: ""}, duration: "q"}).setStave(staveText),
          new VF.TextNote({ text: "587.3295Hz", font: { family: "Lato", size: 12, weight: ""}, duration: "q"}).setStave(staveText),
          new VF.TextNote({ text: "622.2540Hz", font: { family: "Lato", size: 12, weight: ""}, duration: "q"}).setLine(0).setStave(staveText).setJustification(VF.TextNote.Justification.NONE)

        ];

        var voice = new VF.Voice({num_beats: 8,  beat_value: 4, resolution:VF.RESOLUTION});

        var voice3 = new VF.Voice({num_beats: 8, beat_value: 4, resolution:VF.RESOLUTION});
        voice.addTickables(notes).setStave(staveTreble);

        voice3.addTickables(text).setStave(staveText);

        var startX = Math.max(staveTreble.getNoteStartX(), staveText.getNoteStartX());
        staveTreble.setNoteStartX(startX);



        var formatter = new VF.Formatter().joinVoices([voice, voice3]).format([voice, voice3], 800 - (startX));


        // Render voice
        voice.draw(context, staveTreble);
        voice3.draw(context, staveText);
      }

      function renderEflatLydianBassHertz () {
        var VF = Vex.Flow;

        var div = document.getElementById("EflatLydianBassHertz");
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(900, 190);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        var staveTreble = new VF.Stave(10, 40, 800);
        var staveText = new VF.Stave(10, 160, 800);

        // Add cleffs and time signature.
        staveTreble.addClef("bass");

        // Connect it to the rendering context and draw!
        staveTreble.setContext(context).draw();
        staveText.setContext(context).draw();

        // Create the notes
        var notes = [
          new VF.StaveNote({ clef: "bass", keys: ["e/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),
          new VF.StaveNote({ clef: "bass", keys: ["f/2"], duration: "q"}).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ clef: "bass", keys: ["g/2"], duration: "q" }).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ clef: "bass", keys: ["a/2"], duration: "q" }).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ clef: "bass", keys: ["b/2"], duration: "q" }).addAccidental(0, new VF.Accidental("b")),

          new VF.StaveNote({ clef: "bass", keys: ["c/3"], duration: "q" }).addAccidental(0, new VF.Accidental("n")),


          new VF.StaveNote({ clef: "bass", keys: ["d/3"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("n")),

          new VF.StaveNote({ clef: "bass", keys: ["e/3"], duration: "q", stem_direction: -1 }).addAccidental(0, new VF.Accidental("b"))
        ];



        var text = [
        	new VF.TextNote({ text: "77.7817Hz", font: { family: "Lato", size: 12, weight: ""}, duration: "q"}).setStave(staveText).setJustification(VF.TextNote.Justification.LEFT),
          new VF.TextNote({ text: "87.3071Hz", font: { family: "Lato", size: 12, weight: ""}, duration: "q"}).setStave(staveText).setJustification(VF.TextNote.Justification.NONE),
          new VF.TextNote({ text: "97.9989Hz", font: { family: "Lato", size: 12, weight: ""}, duration: "q"}).setStave(staveText),
          new VF.TextNote({ text: "110.0000Hz", font: { family: "Lato", size: 12, weight: ""}, duration: "q"}).setStave(staveText),
          new VF.TextNote({ text: "116.5409Hz", font: { family: "Lato", size: 12, weight: ""}, duration: "q"}).setStave(staveText),
          new VF.TextNote({ text: "130.8128Hz", font: { family: "Lato", size: 12, weight: ""}, duration: "q"}).setStave(staveText),
          new VF.TextNote({ text: "146.8324Hz", font: { family: "Lato", size: 12, weight: ""}, duration: "q"}).setStave(staveText),
          new VF.TextNote({ text: "155.5635Hz", font: { family: "Lato", size: 12, weight: ""}, duration: "q"}).setLine(0).setStave(staveText).setJustification(VF.TextNote.Justification.NONE)

        ];

        var voice = new VF.Voice({num_beats: 8,  beat_value: 4, resolution:VF.RESOLUTION});

        var voice3 = new VF.Voice({num_beats: 8, beat_value: 4, resolution:VF.RESOLUTION});
        voice.addTickables(notes).setStave(staveTreble);

        voice3.addTickables(text).setStave(staveText);

        var startX = Math.max(staveTreble.getNoteStartX(), staveText.getNoteStartX());
        staveTreble.setNoteStartX(startX);



        var formatter = new VF.Formatter().joinVoices([voice, voice3]).format([voice, voice3], 800 - (startX));


        // Render voice
        voice.draw(context, staveTreble);
        voice3.draw(context, staveText);
      }

      function renderEflatLydianExercise1 () {
        var VF = Vex.Flow;

        var div = document.getElementById("EflatLydianExercise[1]")
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        renderer.resize(1100, 600);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        var stave = new VF.Stave(10, 40, 250);
        var staveBass = new VF.Stave(10, 160, 250);
        var staveBar2 = new VF.Stave(260, 40, 300);
        var staveBassBar2 = new VF.Stave(260, 160, 300);

        stave.addClef("treble");
        staveBass.addClef("bass");

        stave.setContext(context).draw();
        staveBass.setContext(context).draw();
        staveBar2.setContext(context).draw();
        staveBassBar2.setContext(context).draw();

        var notes = [
          new VF.StaveNote({ keys: ["e/4"], duration: "q" }).
        	  addAccidental(0, new VF.Accidental("b"))

        ];

        var notes2 = [
          new VF.StaveNote({ keys: ["e/4"], duration: "8" }),
          new VF.StaveNote({ keys: ["e/4"], duration: "8" })
        ];

        var notesBar2 = [
        	new VF.StaveNote({ keys: ["e/4"], duration: "q"}).addAccidental(0, new VF.Accidental("b"))
        ];

        var notes2Bar2 = [
        	new VF.StaveNote({ keys: ["f/4"], duration: "q"})
        ];

        var notes3Bar2 = [
        	new VF.StaveNote({ keys: ["e/4"], duration: "8"}).addAccidental(0, new VF.Accidental("b")),
          new VF.StaveNote({ keys: ["f/4"], duration: "8"})
        ];

        var notes4Bar2 = [
        	new VF.StaveNote({ keys: ["e/4"], duration: "8"}).addAccidental(0, new VF.Accidental("b")),
          new VF.StaveNote({ keys: ["f/4"], duration: "8"})
        ];

        var notesBass = [
          new VF.StaveNote({ clef: "bass", keys: ["e/2"], duration: "8" }).addAccidental(0, new VF.Accidental("b")),
          new VF.StaveNote({ clef: "bass", keys: ["e/2"], duration: "8" })

        ];

        var notesBass2 = [
        	new VF.StaveNote({ clef: "bass", keys: ["e/2"], duration: "q" })
        ];

        var notesBassBar2 = [
        	new VF.StaveNote({ clef: "bass", keys: ["e/2"], duration: "8" }).addAccidental(0, new VF.Accidental("b")),
          new VF.StaveNote({ clef: "bass", keys: ["f/2"], duration: "8"})
        ];

        var notesBass2Bar2 = [
        	new VF.StaveNote({ clef: "bass", keys: ["e/2"], duration: "8" }).addAccidental(0, new VF.Accidental("b")),
          new VF.StaveNote({ clef: "bass", keys: ["f/2"], duration: "8"})
        ];

        var notesBass3Bar2 = [
        	new VF.StaveNote({ clef: "bass", keys: ["e/2"], duration: "q"}).addAccidental(0, new VF.Accidental("b"))
        ];

        var notesBass4Bar2 = [
        	new VF.StaveNote({ clef: "bass", keys: ["f/2"], duration: "q"})
        ];



        // Create the beams
        var beams = [
          new VF.Beam(notes2),
          new VF.Beam(notesBass),
          new VF.Beam(notes3Bar2),
          new VF.Beam(notes4Bar2),
          new VF.Beam(notesBassBar2),
          new VF.Beam(notesBass2Bar2)
        ];

        var startX = Math.max(stave.getNoteStartX(), staveBass.getNoteStartX());
        var startXbar2 = Math.max(staveBar2.getNoteStartX(), staveBassBar2.getNoteStartX());
        stave.setNoteStartX(startX + 15);
        staveBass.setNoteStartX(startX);
        staveBar2.setNoteStartX(startXbar2 + 15);
        staveBassBar2.setNoteStartX(startXbar2 - 5);



        var all_notes = notes.concat(notes2);
        var all_bass_notes = notesBass.concat(notesBass2);
        var all_notes_bar2 = notesBar2.concat(notes2Bar2).concat(notes3Bar2).concat(notes4Bar2);
        var all_bass_notes_bar2 = notesBassBar2.concat(notesBass2Bar2).concat(notesBass3Bar2).concat(notesBass4Bar2);
        VF.Formatter.FormatAndDraw(context, stave, all_notes);
        VF.Formatter.FormatAndDraw(context, staveBass, all_bass_notes);
        VF.Formatter.FormatAndDraw(context, staveBar2, all_notes_bar2);
        VF.Formatter.FormatAndDraw(context, staveBassBar2, all_bass_notes_bar2);
        beams.forEach(function(b) {
          b.setContext(context).draw();
        });
      }

      function makeSoundingObject (name) {
        var oscillator = initNewOscillator(scaleTunings.eb4);
        var panner = initNewPan();
        var gain = initNewGain();
        var inputHandle = getNextInput();
        var soundingObject = initSoundingObject(oscillator, panner, gain, name);
        if (inputHandle < 16) {
          gain.connect(subMergerNode1, 0, 0);
        } else {
          if (inputHandle < 32) {
            gain.connect(subMergerNode2, 0, 0);
          } else {
            gain.connect(subMergerNode3, 0, 0);
          }
        }
        panner.connect(gain);
        oscillator.connect(panner);
        oscillator.start();

        return(soundingObject);
      }

      function renderScore (score, voice, tempo, button) {

        if (score.length > 0) {
          if (button.classList[0] === 'audioExamplePlaying') {
            voice.osc.frequency.value = score[0].frequency;
            voice.hertz = score[0].frequency;
            voice.gain.gain.value = score[0].gain;
            voice.gainvalue = score[0].gain;
            setTimeout(()=>{
              voice.gain.gain.value = 0;
              voice.gainvalue = 0;
              setTimeout(()=>{
                renderScore(score.slice(1), voice, tempo, button);
              }, 17);

            }, (((60000/tempo.value) * score[0].duration) - 17));
          }
        } else {
          voice.gain.gain.value = 0;
          button.className = 'audioExample';
        }
      }

      function renderEFlatLydianExercize0Audio() {
        var tempoValue = document.getElementById('eFlatLydianScaleExercise[0]TempoValue');
        var buttonValue = document.getElementById('playEflatLydianScaleExercise[0]');
        var voiceTreble = makeSoundingObject('voice1');
        console.log(voiceTreble);
        var voiceBass = makeSoundingObject('voice2');
        var scoreTreble = [
          {
            frequency: scaleTunings.eb4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.eb4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.f4,
            duration: 1,
            gain: 0.7
          },
          {
            frequency: scaleTunings.eb4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.f4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.g4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.f4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.eb4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.f4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.g4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.a4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.g4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.f4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.eb4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.f4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.g4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.a4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.bb4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.a4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.g4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.f4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.eb4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.f4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.g4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.a4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.bb4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.c5,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.bb4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.a4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.g4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.f4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.eb4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.f4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.g4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.a4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.bb4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.c5,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.d5,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.c5,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.bb4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.a4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.g4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.f4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.eb4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.f4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.g4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.a4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.bb4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.c5,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.d5,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.eb5,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.d5,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.c5,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.bb4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.a4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.g4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.f4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.eb4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.f4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.g4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.a4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.bb4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.c5,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.d5,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.eb5,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.d5,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.c5,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.bb4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.a4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.g4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.f4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.eb4,
            duration: 2,
            gain: 0.6
          }
        ];
        var scoreBass = [
          {
            frequency: scaleTunings.eb2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.eb2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.f2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.eb2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.f2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.g2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.f2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.eb2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.f2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.g2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.a2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.g2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.f2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.eb2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.f2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.g2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.a2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.bb2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.a2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.g2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.f2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.eb2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.f2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.g2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.a2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.bb2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.c3,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.bb2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.a2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.g2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.f2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.eb2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.f2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.g2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.a2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.bb2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.c3,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.d3,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.c3,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.bb2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.a2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.g2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.f2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.eb2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.f2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.g2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.a2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.bb2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.c3,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.d3,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.eb3,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.d3,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.c3,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.bb2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.a2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.g2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.f2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.eb2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.f2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.g2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.a2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.bb2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.c3,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.d3,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.eb3,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.d3,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.c3,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.bb2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.a2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.g2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.f2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.eb2,
            duration: 2,
            gain: 3.0
          }
        ];
        voiceBass.osc.waveform = "square";
        voiceBass.gain.gain.value = 0;
        renderScore(scoreTreble, voiceTreble, tempoValue, buttonValue);
        renderScore(scoreBass, voiceBass, tempoValue, buttonValue);
      }

      function renderEflatLydianScaleWithIntervalClassesAudio() {
        var tempoValue = document.getElementById('eFlatLydianScaleIntervalClassesTempoValue');
        var buttonValue = document.getElementById('playEflatLydianScaleWithIntervalClasses');
        var voiceTreble = makeSoundingObject('voice1');
        console.log(voiceTreble);
        var voiceBass = makeSoundingObject('voice2');
        var scoreTreble = [
          {
            frequency: scaleTunings.eb4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.f4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.g4,
            duration: 1,
            gain: 0.7
          },
          {
            frequency: scaleTunings.a4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.bb4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.c5,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.d5,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.eb5,
            duration: 1,
            gain: 0.6
          }
        ];
        var scoreBass = [
          {
            frequency: scaleTunings.eb2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.f2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.g2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.a2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.bb2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.c3,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.d3,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.eb3,
            duration: 1,
            gain: 3.0
          }
        ];
        voiceBass.osc.waveform = "square";
        voiceBass.gain.gain.value = 0;
        renderScore(scoreTreble, voiceTreble, tempoValue, buttonValue);
        renderScore(scoreBass, voiceBass, tempoValue, buttonValue);
      }

      function renderEflatLydianScaleAudio() {
        var tempoValue = document.getElementById('eFlatLydianScaleTempoValue');
        var buttonValue = document.getElementById('playEflatLydianScale');
        var voiceTreble = makeSoundingObject('voice1');
        console.log(voiceTreble);
        var voiceBass = makeSoundingObject('voice2');
        var scoreTreble = [
          {
            frequency: scaleTunings.eb4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.f4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.g4,
            duration: 1,
            gain: 0.7
          },
          {
            frequency: scaleTunings.a4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.bb4,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.c5,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.d5,
            duration: 1,
            gain: 0.6
          },
          {
            frequency: scaleTunings.eb5,
            duration: 1,
            gain: 0.6
          }
        ];
        var scoreBass = [
          {
            frequency: scaleTunings.eb2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.f2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.g2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.a2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.bb2,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.c3,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.d3,
            duration: 1,
            gain: 3.0
          },
          {
            frequency: scaleTunings.eb3,
            duration: 1,
            gain: 3.0
          }
        ];
        voiceBass.osc.waveform = "square";
        voiceBass.gain.gain.value = 0;
        renderScore(scoreTreble, voiceTreble, tempoValue, buttonValue);
        renderScore(scoreBass, voiceBass, tempoValue, buttonValue);
      }

      function onInit() {
        console.log("Chapter 1, by Elvis Costello. Every day I write the book.");
        var playEflatLydianScale = document.getElementById('playEflatLydianScale');
        var masterVolumeControl = document.getElementById('volumeControl');
        var masterVolumeAmount = document.getElementById('masterGain');
        var eFlatLydianScaleTempo = document.getElementById('eFlatLydianScaleTempo');
        var eFlatLydianScaleTempoValue = document.getElementById('eFlatLydianScaleTempoValue');
        var playEflatLydianScaleWithIntervalClasses = document.getElementById('playEflatLydianScaleWithIntervalClasses');
        var eFlatLydianScaleIntervalClassTempo = document.getElementById('eFlatLydianScaleIntervalClassTempo');
        var eFlatLydianScaleIntervalClassesTempoValue = document.getElementById('eFlatLydianScaleIntervalClassesTempoValue');
        var playEflatLydianScaleExercise0 = document.getElementById('playEflatLydianScaleExercise[0]');

        renderEflatLydianLydian();
        renderEflatLydianWithIntervalClasses();
        renderEflatLydianExercise0();
        renderEflatLydianTrebleHertz();
        renderEflatLydianBassHertz();
        renderEflatLydianExercise1();

        playEflatLydianScaleExercise0.addEventListener('click', ()=>{
          if (playEflatLydianScaleExercise0.classList[0] === 'audioExample') {
            playEflatLydianScaleExercise0.className = 'audioExamplePlaying';
            renderEFlatLydianExercize0Audio();
          } else {
            playEflatLydianScaleExercise0.className = 'audioExample';
          }
        });
        playEflatLydianScaleWithIntervalClasses.addEventListener('click', ()=>{
          if (playEflatLydianScaleWithIntervalClasses.classList[0] === 'audioExample') {
            playEflatLydianScaleWithIntervalClasses.className = 'audioExamplePlaying';
            renderEflatLydianScaleWithIntervalClassesAudio();
          } else {
            playEflatLydianScaleWithIntervalClasses.className = 'audioExample';
          }
        });
        playEflatLydianScale.addEventListener('click', ()=>{
          if (playEflatLydianScale.classList[0] === 'audioExample') {
            playEflatLydianScale.className = 'audioExamplePlaying';
            renderEflatLydianScaleAudio();
          } else {
            playEflatLydianScale.className = 'audioExample';
          }
        });
        eFlatLydianScaleTempo.addEventListener('mouseup', ()=>{
          eFlatLydianScaleBPM = eFlatLydianScaleTempoValue.value;
          eFlatLydianScaleTempo.addEventListener('mousemove', ()=>{
            eFlatLydianScaleBPM = eFlatLydianScaleTempoValue.value;
          });
        });
        eFlatLydianScaleIntervalClassTempo.addEventListener('mouseup', ()=>{
          eFlatLydianScaleIntervalClassBPM = eFlatLydianScaleIntervalClassesTempoValue.value;
          eFlatLydianScaleIntervalClassTempo.addEventListener('mousemove', ()=>{
            eFlatLydianScaleIntervalClassBPM = eFlatLydianScaleIntervalClassesTempoValue.value;
          });
        });
        masterVolumeControl.addEventListener('mouseup', ()=>{
          masterVolume = masterVolumeAmount.value * 0.03;
          masterGainNode.gain.value = masterVolume;
          masterVolumeControl.addEventListener('mousemove', ()=>{
            masterVolume = masterVolumeAmount.value * 0.03;
            masterGainNode.gain.value = masterVolume;
          });
        });
      }

    }

}());
