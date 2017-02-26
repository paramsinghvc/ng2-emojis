import { Directive, Component, OnInit, ElementRef, Input, Output, EventEmitter, ContentChild } from '@angular/core';

@Directive({
	selector: '[emojiInput]',
	host: {
		style: `width: 100%;
		padding: 15px 15px;
	    border: none;
	    box-sizing: border-box;
	    padding-right: 44px;
	    border-radius: 3px;
	    width: 300px;
	    background: #f7f7f7;
	    font-size: 16px;`
	}
})
export class EmojiInput {
	@Input() emojiInputValue: any;
	constructor(public el: ElementRef) {

	}
}

@Component({
	selector: 'emojify-holder',
	template: `<div class="emoji-input-holder">
				    <div class="smiley" role="button" tabindex="0" (click)="openDialog($event)">
				    </div>
				    <ng-content></ng-content>
				    <section class="emojis-dialog" *ngIf="isDialogOpen">
				        <section class="emoticons-category" *ngFor="let category of (emojiCodes | keys)">
				            <p>{{category}}</p>
				            <span class="emoticon" *ngFor="let eCode of emojiCodes[category]; let i = index" innerHtml="{{eCode}}" (click)="emojiSelected($event, eCode)">		
				    		</span>
				        </section>       
				    </section>
				</div>
				`,
	styles: [
		`
			.emoji-input-holder {
			  position: relative;
			  width: 300px;
			}
			.emoji-input-holder .smiley {
			  position: absolute;
			  right: 10px;
			  font-size: 30px;
			  cursor: pointer;
			  outline: none;
			}
			.emoji-input-holder .smiley:before {
			  content: '☺';
			  font-size: inherit;
			  width: 20px;
			  height: 30px;
			}
			.emoji-input-holder .smiley:hover {
			  color: #757575;
			}
			.emoji-input-holder .smiley:active {
			  color: #909090;
			}
			.emoji-input-holder .smiley:focus {
			  color: #000000;
			}
			.emoji-input-holder .emojis-dialog {
			  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
			  border-radius: 3px;
			  padding: 5px 15px;
			  position: absolute;
			  z-index: 2;
			  width: 200px;
			  height: 210px;
			  overflow-y: scroll;
			  right: 0;
			  font-size: 25px;
			  margin-top: 6px;
			}
			.emoji-input-holder .emojis-dialog .emoticons-category {
			  display: flex;
			  flex-wrap: wrap;
			  justify-content: space-around;
			  cursor: pointer;
			  margin-bottom: 20px;
			}
			.emoji-input-holder .emojis-dialog .emoticons-category > p {
			  font-family: sans-serif;
			  font-size: 14px;
			  flex: 1 100%;
			  margin: 10px 0;
			  border-bottom: 1px solid rgba(142, 142, 142, 0.1);
			  padding-bottom: 10px;
			}
			.emoji-input-holder .emojis-dialog .emoticons-category span.emoticon {
			  padding: 0 5px;
			  border-radius: 3px;
			}
			.emoji-input-holder .emojis-dialog .emoticons-category span.emoticon:hover {
			  background: rgba(0, 0, 0, 0.1);
			}
		`
	]
})
export class EmojisComponent implements OnInit {

	@ContentChild(EmojiInput) inputEl: EmojiInput;
	@Output() emojiAdded: EventEmitter<any> = new EventEmitter();

	emojiCodes: any = {
		People: [
			"&#x1f601;",
			"&#x1f602;",
			"&#x1f603;",
			"&#x1f604;",
			"&#x1f605;",
			"&#x1f606;",
			"&#x1f607;",
			"&#x1f608;",
			"&#x1f609;",
			"&#x1f60a;",
			"&#x1f60b;",
			"&#x1f60c;",
			"&#x1f60d;",
			"&#x1f60e;",
			"&#x1f60f;",
			"&#x1f610;",
			"&#x1f611;",
			"&#x1f612;",
			"&#x1f613;",
			"&#x1f614;",
			"&#x1f615;",
			"&#x1f616;",
			"&#x1f617;",
			"&#x1f618;",
			"&#x1f619;",
			"&#x1f61a;",
			"&#x1f61b;",
			"&#x1f61c;",
			"&#x1f61d;",
			"&#x1f61e;",
			"&#x1f61f;",
			"&#x1f620;",
			"&#x1f621;",
			"&#x1f622;",
			"&#x1f623;",
			"&#x1f624;",
			"&#x1f625;",
			"&#x1f626;",
			"&#x1f627;",
			"&#x1f628;",
			"&#x1f629;",
			"&#x1f62a;",
			"&#x1f62b;",
			"&#x1f62c;",
			"&#x1f62d;",
			"&#x1f62e;",
			"&#x1f62f;",
			"&#x1f630;",
			"&#x1f631;",
			"&#x1f632;",
			"&#x1f633;",
			"&#x1f634;",
			"&#x1f635;",
			"&#x1f636;",
			"&#x1f637;",
			"&#x1f638;",
			"&#x1f639;",
			"&#x1f63a;",
			"&#x1f63b;",
			"&#x1f63c;",
			"&#x1f63d;",
			"&#x1f63e;",
			"&#x1f63f;",
			"&#x1f640;",
			"&#x1f641;",
			"&#x1f642;",
			"&#x1f645;",
			"&#x1f646;",
			"&#x1f647;",
			"&#x1f648;",
			"&#x1f649;",
			"&#x1f64a;",
			"&#x1f64b;",
			"&#x1f64c;",
			"&#x1f64d;",
			"&#x1f64e;",
			"&#x1f64f;",
			"&#x1f440;",
			"&#x1f442;",
			"&#x1f443;",
			"&#x1f444;",
			"&#x1f445;",
			"&#x1f446;",
			"&#x1f447;",
			"&#x1f448;",
			"&#x1f449;",
			"&#x1f44a;",
			"&#x1f44b;",
			"&#x1f44c;",
			"&#x1f44d;",
			"&#x1f44e;",
			"&#x1f44f;",
			"&#x1f450;",
			"&#x1f451;",
			"&#x1f452;",
			"&#x1f453;",
			"&#x1f454;",
			"&#x1f455;",
			"&#x1f456;",
			"&#x1f457;",
			"&#x1f458;",
			"&#x1f459;",
			"&#x1f45a;",
			"&#x1f45b;",
			"&#x1f45c;",
			"&#x1f45d;",
			"&#x1f45e;",
			"&#x1f45f;",
			"&#x1f460;",
			"&#x1f461;",
			"&#x1f462;",
			"&#x1f463;",
			"&#x1f464;",
			"&#x1f465;",
			"&#x1f466;",
			"&#x1f467;",
			"&#x1f468;",
			"&#x1f469;",
			"&#x1f46a;",
			"&#x1f46b;",
			"&#x1f46c;",
			"&#x1f46d;",
			"&#x1f46e;",
			"&#x1f46f;",
			"&#x1f470;",
			"&#x1f471;",
			"&#x1f472;",
			"&#x1f473;",
			"&#x1f474;",
			"&#x1f475;",
			"&#x1f476;",
			"&#x1f477;",
			"&#x1f478;",
			"&#x1f479;",
			"&#x1f47a;",
			"&#x1f47b;",
			"&#x1f47c;",
			"&#x1f47d;",
			"&#x1f47e;",
			"&#x1f47f;",
			"&#x1f480;",
			"&#x1f481;",
			"&#x1f482;",
			"&#x1f483;",
			"&#x1f484;",
			"&#x1f485;",
			"&#x1f486;",
			"&#x1f487;",
			"&#x1f488;",
			"&#x1f489;",
			"&#x1f48a;",
			"&#x1f48b;",
			"&#x1f48c;",
			"&#x1f48d;",
			"&#x1f48e;",
			"&#x1f48f;",
			"&#x1f490;",
			"&#x1f491;",
			"&#x1f492;",
			"&#x1f493;",
			"&#x1f494;",
			"&#x1f495;",
			"&#x1f496;",
			"&#x1f497;",
			"&#x1f498;",
			"&#x1f499;",
			"&#x1f49a;",
			"&#x1f49b;",
			"&#x1f49c;",
			"&#x1f49d;",
			"&#x1f49e;",
			"&#x1f49f;",
			"&#x1f4a0;",
			"&#x1f4a1;",
			"&#x1f4a2;",
			"&#x1f4a3;",
			"&#x1f4a4;",
			"&#x1f4a5;",
			"&#x1f4a6;",
			"&#x1f4a7;",
			"&#x1f4a8;",
			"&#x1f4a9;",
			"&#x1f4aa;",
			"&#x1f4ab;",
			"&#x1f4ac;",
			"&#x1f4ad;",
			"&#x1f4ae;",
			"&#x1f4af;",
		],
		Nature: [
			"&#x1f40c;",
			"&#x1f40d;",
			"&#x1f40e;",
			"&#x1f40f;",
			"&#x1f410;",
			"&#x1f411;",
			"&#x1f412;",
			"&#x1f413;",
			"&#x1f414;",
			"&#x1f415;",
			"&#x1f416;",
			"&#x1f417;",
			"&#x1f418;",
			"&#x1f419;",
			"&#x1f41a;",
			"&#x1f41b;",
			"&#x1f41c;",
			"&#x1f41d;",
			"&#x1f41e;",
			"&#x1f41f;",
			"&#x1f420;",
			"&#x1f421;",
			"&#x1f422;",
			"&#x1f423;",
			"&#x1f424;",
			"&#x1f425;",
			"&#x1f426;",
			"&#x1f427;",
			"&#x1f428;",
			"&#x1f429;",
			"&#x1f42a;",
			"&#x1f42b;",
			"&#x1f42c;",
			"&#x1f42d;",
			"&#x1f42e;",
			"&#x1f42f;",
			"&#x1f430;",
			"&#x1f431;",
			"&#x1f432;",
			"&#x1f433;",
			"&#x1f434;",
			"&#x1f435;",
			"&#x1f436;",
			"&#x1f437;",
			"&#x1f438;",
			"&#x1f439;",
			"&#x1f43a;",
			"&#x1f43b;",
			"&#x1f43c;",
			"&#x1f43d;",
			"&#x1f43e;",
			"&#x1f331;",
			"&#x1f332;",
			"&#x1f333;",
			"&#x1f334;",
			"&#x1f335;",
			"&#x1f337;",
			"&#x1f338;",
			"&#x1f339;",
			"&#x1f33a;",
			"&#x1f33b;",
			"&#x1f33c;",
			"&#x1f33d;",
			"&#x1f33e;",
			"&#x1f33f;",
			"&#x1f340;",
			"&#x1f341;",
			"&#x1f342;",
			"&#x1f343;",
			"&#x1f344;",
		],
		Food: [
			"&#x1f345;",
			"&#x1f346;",
			"&#x1f347;",
			"&#x1f348;",
			"&#x1f349;",
			"&#x1f34a;",
			"&#x1f34b;",
			"&#x1f34c;",
			"&#x1f34d;",
			"&#x1f34e;",
			"&#x1f34f;",
			"&#x1f350;",
			"&#x1f351;",
			"&#x1f352;",
			"&#x1f353;",
			"&#x1f354;",
			"&#x1f355;",
			"&#x1f356;",
			"&#x1f357;",
			"&#x1f358;",
			"&#x1f359;",
			"&#x1f35a;",
			"&#x1f35b;",
			"&#x1f35c;",
			"&#x1f35d;",
			"&#x1f35e;",
			"&#x1f35f;",
			"&#x1f360;",
			"&#x1f361;",
			"&#x1f362;",
			"&#x1f363;",
			"&#x1f364;",
			"&#x1f365;",
			"&#x1f366;",
			"&#x1f367;",
			"&#x1f368;",
			"&#x1f369;",
			"&#x1f36a;",
			"&#x1f36b;",
			"&#x1f36c;",
			"&#x1f36d;",
			"&#x1f36e;",
			"&#x1f36f;",
			"&#x1f370;",
			"&#x1f371;",
			"&#x1f372;",
			"&#x1f373;",
			"&#x1f374;",
			"&#x1f375;",
			"&#x1f376;",
			"&#x1f377;",
			"&#x1f378;",
			"&#x1f379;",
			"&#x1f37a;",
			"&#x1f37b;",
			"&#x1f37c;",
			"&#x1f380;",
			"&#x1f381;",
			"&#x1f382;",
			"&#x1f383;",
			"&#x1f384;",
			"&#x1f385;",],
		Activities: [],
		Travel: [
			"&#x1f680;",
			"&#x1f681;",
			"&#x1f682;",
			"&#x1f683;",
			"&#x1f684;",
			"&#x1f685;",
			"&#x1f686;",
			"&#x1f687;",
			"&#x1f688;",
			"&#x1f689;",
			"&#x1f68a;",
			"&#x1f68b;",
			"&#x1f68c;",
			"&#x1f68d;",
			"&#x1f68e;",
			"&#x1f68f;",
			"&#x1f690;",
			"&#x1f691;",
			"&#x1f692;",
			"&#x1f693;",
			"&#x1f694;",
			"&#x1f695;",
			"&#x1f696;",
			"&#x1f697;",
			"&#x1f698;",
			"&#x1f699;",
			"&#x1f69a;",
			"&#x1f69b;",
			"&#x1f69c;",
			"&#x1f69d;",
			"&#x1f69e;",
			"&#x1f69f;",
			"&#x1f6a0;",
			"&#x1f6a1;",
			"&#x1f6a2;",
			"&#x1f6a3;",
			"&#x1f6a4;",
			"&#x1f6a5;",
			"&#x1f6a6;",
			"&#x1f6a7;",
			"&#x1f6a8;",
			"&#x1f6a9;",
			"&#x1f6aa;",
			"&#x1f6ab;",
			"&#x1f6ac;",
			"&#x1f6ad;",
			"&#x1f6ae;",
			"&#x1f6af;",
			"&#x1f6b0;",
			"&#x1f6b1;",
			"&#x1f6b2;",
			"&#x1f6b3;",
			"&#x1f6b4;",
			"&#x1f6b5;",
			"&#x1f6b6;",
			"&#x1f6b7;",
			"&#x1f6b8;",
			"&#x1f6b9;",
			"&#x1f6ba;",
			"&#x1f6bb;",
			"&#x1f6bc;",
			"&#x1f6bd;",
			"&#x1f6be;",
			"&#x1f6bf;",
			"&#x1f6c0;",],
		Objects: [
			"&#x1f4b0;",
			"&#x1f4b1;",
			"&#x1f4b2;",
			"&#x1f4b3;",
			"&#x1f4b4;",
			"&#x1f4b5;",
			"&#x1f4b6;",
			"&#x1f4b7;",
			"&#x1f4b8;",
			"&#x1f4b9;",
			"&#x1f4ba;",
			"&#x1f4bb;",
			"&#x1f4bc;",
			"&#x1f4bd;",
			"&#x1f4be;",
			"&#x1f4bf;",
			"&#x1f4c0;",
			"&#x1f4c1;",
			"&#x1f4c2;",
			"&#x1f4c3;",
			"&#x1f4c4;",
			"&#x1f4c5;",
			"&#x1f4c6;",
			"&#x1f4c7;",
			"&#x1f4c8;",
			"&#x1f4c9;",
			"&#x1f4ca;",
			"&#x1f4cb;",
			"&#x1f4cc;",
			"&#x1f4cd;",
			"&#x1f4ce;",
			"&#x1f4cf;",
			"&#x1f4d0;",
			"&#x1f4d1;",
			"&#x1f4d2;",
			"&#x1f4d3;",
			"&#x1f4d4;",
			"&#x1f4d5;",
			"&#x1f4d6;",
			"&#x1f4d7;",
			"&#x1f4d8;",
			"&#x1f4d9;",
			"&#x1f4da;",
			"&#x1f4db;",
			"&#x1f4dc;",
			"&#x1f4dd;",
			"&#x1f4de;",
			"&#x1f4df;",
			"&#x1f4e0;",
			"&#x1f4e1;",
			"&#x1f4e2;",
			"&#x1f4e3;",
			"&#x1f4e4;",
			"&#x1f4e5;",
			"&#x1f4e6;",
			"&#x1f4e7;",],
		Miscellaneous: [
			"&#x203c;",
			"&#x2049;",
			"&#x2122;",
			"&#x2139;",
			"&#x2194;",
			"&#x2195;",
			"&#x2196;",
			"&#x2197;",
			"&#x2198;",
			"&#x2199;",
			"&#x21a9;",
			"&#x21aa;",
			"&#x231a;",
			"&#x231b;",
			"&#x23e9;",
			"&#x23ea;",
			"&#x23eb;",
			"&#x23ec;",
			"&#x23f0;",
			"&#x23f3;",
			"&#x24c2;",
			"&#x25aa;",
			"&#x25ab;",
			"&#x25b6;",
			"&#x25c0;",
			"&#x25fb;",
			"&#x25fc;",
			"&#x25fd;",
			"&#x25fe;",
			"&#x2600;",
			"&#x2601;",
			"&#x260e;",
			"&#x2611;",
			"&#x2614;",
			"&#x2615;",
			"&#x261d;",
			"&#x263a;",
			"&#x2648;",
			"&#x2649;",
			"&#x264a;",
			"&#x264b;",
			"&#x264c;",
			"&#x264d;",
			"&#x264e;",
			"&#x264f;",
			"&#x2650;",
			"&#x2651;",
			"&#x2652;",
			"&#x2653;",
			"&#x2660;",
			"&#x2663;",
			"&#x2665;",
			"&#x2666;",
			"&#x2668;",
			"&#x267b;",
			"&#x267f;",
			"&#x2693;",
			"&#x26a0;",
			"&#x26a1;",
			"&#x26aa;",
			"&#x26ab;",
			"&#x26bd;",
			"&#x26be;",
			"&#x26c4;",
			"&#x26c5;",
			"&#x26ce;",
			"&#x26d4;",
			"&#x26ea;",
			"&#x26f2;",
			"&#x26f3;",
			"&#x26f5;",
			"&#x26fa;",
			"&#x26fd;",
			"&#x2702;",
			"&#x2705;",
			"&#x2708;",
			"&#x2709;",
			"&#x270a;",
			"&#x270b;",
			"&#x270c;",
			"&#x270f;",
			"&#x2712;",
			"&#x2714;",
			"&#x2716;",
			"&#x2728;",
			"&#x2733;",
			"&#x2734;",
			"&#x2744;",
			"&#x2747;",
			"&#x274c;",
			"&#x274e;",
			"&#x2753;",
			"&#x2754;",
			"&#x2755;",
			"&#x2757;",
			"&#x2764;",
			"&#x2795;",
			"&#x2796;",
			"&#x2797;",
			"&#x27a1;",
			"&#x27b0;",
			"&#x27bf;",
			"&#x2934;",
			"&#x2935;",
			"&#x2b05;",
			"&#x2b06;",
			"&#x2b07;",
			"&#x2b1b;",
			"&#x2b1c;",
			"&#x2b50;",
			"&#x2b55;",],
	}
	isDialogOpen: boolean = false;
	clickFn: any;
	enteredText: string;
	constructor(private el: ElementRef) { }

	ngOnInit() {

	}
	
	openDialog(e: any) {
		e.stopPropagation();
		this.isDialogOpen = true;
		this.clickFn = () => {
			this.closeDialog();
		}
		document.addEventListener('click', this.clickFn);
	}

	closeDialog() {
		this.isDialogOpen = false;
		document.removeEventListener('click', this.clickFn);
	}

	emojiSelected(e:any, emoji: any){
		e.stopPropagation();
		this.emojiAdded.emit(this.inputEl.emojiInputValue + String.fromCodePoint(parseInt('0' + emoji.replace(/&#/, '').replace(/;/, ''))));
		this.inputEl.el.nativeElement.focus();
		this.closeDialog();
	}

}
