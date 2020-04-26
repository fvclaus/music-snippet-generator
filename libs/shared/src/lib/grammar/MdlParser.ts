// Generated from libs/shared/src/lib/grammar/Mdl.g4 by ANTLR 4.7.3-SNAPSHOT


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
import { MdlVisitor } from "./MdlVisitor";


export class MdlParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly NOTE = 5;
	public static readonly PITCH_CLASS = 6;
	public static readonly WS = 7;
	public static readonly RULE_file = 0;
	public static readonly RULE_trebleStaff = 1;
	public static readonly RULE_bassStaff = 2;
	public static readonly RULE_bar = 3;
	public static readonly RULE_pitch = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "trebleStaff", "bassStaff", "bar", "pitch",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\n'", "'t'", "'|'", "'b'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "NOTE", "PITCH_CLASS", 
		"WS",
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
			this.state = 10;
			this.trebleStaff();
			this.state = 11;
			this.match(MdlParser.T__0);
			this.state = 12;
			this.bassStaff();
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
			this.state = 14;
			this.match(MdlParser.T__1);
			this.state = 15;
			this.match(MdlParser.T__2);
			this.state = 19;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MdlParser.T__2 || _la === MdlParser.NOTE) {
				{
				{
				this.state = 16;
				this.bar();
				}
				}
				this.state = 21;
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
	public bassStaff(): BassStaffContext {
		let _localctx: BassStaffContext = new BassStaffContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, MdlParser.RULE_bassStaff);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 22;
			this.match(MdlParser.T__3);
			this.state = 23;
			this.match(MdlParser.T__2);
			this.state = 27;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MdlParser.T__2 || _la === MdlParser.NOTE) {
				{
				{
				this.state = 24;
				this.bar();
				}
				}
				this.state = 29;
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
		this.enterRule(_localctx, 6, MdlParser.RULE_bar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MdlParser.NOTE) {
				{
				{
				this.state = 30;
				this.pitch();
				}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 36;
			this.match(MdlParser.T__2);
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
		this.enterRule(_localctx, 8, MdlParser.RULE_pitch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this.match(MdlParser.NOTE);
			this.state = 39;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\t,\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03\x14\n\x03\f\x03\x0E" +
		"\x03\x17\v\x03\x03\x04\x03\x04\x03\x04\x07\x04\x1C\n\x04\f\x04\x0E\x04" +
		"\x1F\v\x04\x03\x05\x07\x05\"\n\x05\f\x05\x0E\x05%\v\x05\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x02\x02\x02\x07\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\x02\x02\x02)\x02\f\x03\x02\x02\x02\x04\x10\x03\x02\x02\x02" +
		"\x06\x18\x03\x02\x02\x02\b#\x03\x02\x02\x02\n(\x03\x02\x02\x02\f\r\x05" +
		"\x04\x03\x02\r\x0E\x07\x03\x02\x02\x0E\x0F\x05\x06\x04\x02\x0F\x03\x03" +
		"\x02\x02\x02\x10\x11\x07\x04\x02\x02\x11\x15\x07\x05\x02\x02\x12\x14\x05" +
		"\b\x05\x02\x13\x12\x03\x02\x02\x02\x14\x17\x03\x02\x02\x02\x15\x13\x03" +
		"\x02\x02\x02\x15\x16\x03\x02\x02\x02\x16\x05\x03\x02\x02\x02\x17\x15\x03" +
		"\x02\x02\x02\x18\x19\x07\x06\x02\x02\x19\x1D\x07\x05\x02\x02\x1A\x1C\x05" +
		"\b\x05\x02\x1B\x1A\x03\x02\x02\x02\x1C\x1F\x03\x02\x02\x02\x1D\x1B\x03" +
		"\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E\x07\x03\x02\x02\x02\x1F\x1D\x03" +
		"\x02\x02\x02 \"\x05\n\x06\x02! \x03\x02\x02\x02\"%\x03\x02\x02\x02#!\x03" +
		"\x02\x02\x02#$\x03\x02\x02\x02$&\x03\x02\x02\x02%#\x03\x02\x02\x02&\'" +
		"\x07\x05\x02\x02\'\t\x03\x02\x02\x02()\x07\x07\x02\x02)*\x07\b\x02\x02" +
		"*\v\x03\x02\x02\x02\x05\x15\x1D#";
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
	public bassStaff(): BassStaffContext {
		return this.getRuleContext(0, BassStaffContext);
	}
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
	// @Override
	public accept<Result>(visitor: MdlVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TrebleStaffContext extends ParserRuleContext {
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
	// @Override
	public accept<Result>(visitor: MdlVisitor<Result>): Result {
		if (visitor.visitTrebleStaff) {
			return visitor.visitTrebleStaff(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BassStaffContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return MdlParser.RULE_bassStaff; }
	// @Override
	public enterRule(listener: MdlListener): void {
		if (listener.enterBassStaff) {
			listener.enterBassStaff(this);
		}
	}
	// @Override
	public exitRule(listener: MdlListener): void {
		if (listener.exitBassStaff) {
			listener.exitBassStaff(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MdlVisitor<Result>): Result {
		if (visitor.visitBassStaff) {
			return visitor.visitBassStaff(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BarContext extends ParserRuleContext {
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
	// @Override
	public accept<Result>(visitor: MdlVisitor<Result>): Result {
		if (visitor.visitBar) {
			return visitor.visitBar(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: MdlVisitor<Result>): Result {
		if (visitor.visitPitch) {
			return visitor.visitPitch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


