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

        renderEflatLydianLydian();
        renderEflatLydianWithIntervalClasses();

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
