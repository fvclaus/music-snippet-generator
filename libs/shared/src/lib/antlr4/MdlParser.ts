// Generated from libs/shared/src/grammar/Mdl.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { MdlListener } from "./MdlListener";

export class MdlParser extends Parser {
	public static readonly TREBLE_CLEF = 1;
	public static readonly BAR_LINE = 2;
	public static readonly NOTE = 3;
	public static readonly PITCH_CLASS = 4;
	public static readonly WS = 5;
	public static readonly RULE_file = 0;
	public static readonly RULE_trebleStaff = 1;
	public static readonly RULE_bar = 2;
	public static readonly RULE_pitch = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "trebleStaff", "bar", "pitch",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'treble_clef'", "'|'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "TREBLE_CLEF", "BAR_LINE", "NOTE", "PITCH_CLASS", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MdlParser._LITERAL_NAMES, MdlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MdlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Mdl.g4"; }

	// @Override
	public get ruleNames(): string[] { return MdlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return MdlParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MdlParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, MdlParser.RULE_file);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 8;
			this.trebleStaff();
			this.state = 9;
			this.match(MdlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trebleStaff(): TrebleStaffContext {
		let _localctx: TrebleStaffContext = new TrebleStaffContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, MdlParser.RULE_trebleStaff);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 11;
			this.match(MdlParser.TREBLE_CLEF);
			this.state = 12;
			this.match(MdlParser.BAR_LINE);
			this.state = 16;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MdlParser.NOTE) {
				{
				{
				this.state = 13;
				this.bar();
				}
				}
				this.state = 18;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bar(): BarContext {
		let _localctx: BarContext = new BarContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, MdlParser.RULE_bar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 20;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 19;
				this.pitch();
				}
				}
				this.state = 22;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === MdlParser.NOTE);
			this.state = 24;
			this.match(MdlParser.BAR_LINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pitch(): PitchContext {
		let _localctx: PitchContext = new PitchContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, MdlParser.RULE_pitch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			this.match(MdlParser.NOTE);
			this.state = 27;
			this.match(MdlParser.PITCH_CLASS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x07 \x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x07\x03\x11\n\x03\f\x03\x0E\x03\x14\v\x03\x03" +
		"\x04\x06\x04\x17\n\x04\r\x04\x0E\x04\x18\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x02\x02\x02\x06\x02\x02\x04\x02\x06\x02\b\x02\x02\x02" +
		"\x02\x1D\x02\n\x03\x02\x02\x02\x04\r\x03\x02\x02\x02\x06\x16\x03\x02\x02" +
		"\x02\b\x1C\x03\x02\x02\x02\n\v\x05\x04\x03\x02\v\f\x07\x02\x02\x03\f\x03" +
		"\x03\x02\x02\x02\r\x0E\x07\x03\x02\x02\x0E\x12\x07\x04\x02\x02\x0F\x11" +
		"\x05\x06\x04\x02\x10\x0F\x03\x02\x02\x02\x11\x14\x03\x02\x02\x02\x12\x10" +
		"\x03\x02\x02\x02\x12\x13\x03\x02\x02\x02\x13\x05\x03\x02\x02\x02\x14\x12" +
		"\x03\x02\x02\x02\x15\x17\x05\b\x05\x02\x16\x15\x03\x02\x02\x02\x17\x18" +
		"\x03\x02\x02\x02\x18\x16\x03\x02\x02\x02\x18\x19\x03\x02\x02\x02\x19\x1A" +
		"\x03\x02\x02\x02\x1A\x1B\x07\x04\x02\x02\x1B\x07\x03\x02\x02\x02\x1C\x1D" +
		"\x07\x05\x02\x02\x1D\x1E\x07\x06\x02\x02\x1E\t\x03\x02\x02\x02\x04\x12" +
		"\x18";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MdlParser.__ATN) {
			MdlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MdlParser._serializedATN));
		}

		return MdlParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public trebleStaff(): TrebleStaffContext {
		return this.getRuleContext(0, TrebleStaffContext);
	}
	public EOF(): TerminalNode { return this.getToken(MdlParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MdlParser.RULE_file; }
	// @Override
	public enterRule(listener: MdlListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: MdlListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
}


export class TrebleStaffContext extends ParserRuleContext {
	public TREBLE_CLEF(): TerminalNode { return this.getToken(MdlParser.TREBLE_CLEF, 0); }
	public BAR_LINE(): TerminalNode { return this.getToken(MdlParser.BAR_LINE, 0); }
	public bar(): BarContext[];
	public bar(i: number): BarContext;
	public bar(i?: number): BarContext | BarContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BarContext);
		} else {
			return this.getRuleContext(i, BarContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MdlParser.RULE_trebleStaff; }
	// @Override
	public enterRule(listener: MdlListener): void {
		if (listener.enterTrebleStaff) {
			listener.enterTrebleStaff(this);
		}
	}
	// @Override
	public exitRule(listener: MdlListener): void {
		if (listener.exitTrebleStaff) {
			listener.exitTrebleStaff(this);
		}
	}
}


export class BarContext extends ParserRuleContext {
	public BAR_LINE(): TerminalNode { return this.getToken(MdlParser.BAR_LINE, 0); }
	public pitch(): PitchContext[];
	public pitch(i: number): PitchContext;
	public pitch(i?: number): PitchContext | PitchContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PitchContext);
		} else {
			return this.getRuleContext(i, PitchContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MdlParser.RULE_bar; }
	// @Override
	public enterRule(listener: MdlListener): void {
		if (listener.enterBar) {
			listener.enterBar(this);
		}
	}
	// @Override
	public exitRule(listener: MdlListener): void {
		if (listener.exitBar) {
			listener.exitBar(this);
		}
	}
}


export class PitchContext extends ParserRuleContext {
	public NOTE(): TerminalNode { return this.getToken(MdlParser.NOTE, 0); }
	public PITCH_CLASS(): TerminalNode { return this.getToken(MdlParser.PITCH_CLASS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MdlParser.RULE_pitch; }
	// @Override
	public enterRule(listener: MdlListener): void {
		if (listener.enterPitch) {
			listener.enterPitch(this);
		}
	}
	// @Override
	public exitRule(listener: MdlListener): void {
		if (listener.exitPitch) {
			listener.exitPitch(this);
		}
	}
}


